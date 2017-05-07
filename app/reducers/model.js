import Realm from 'realm'
import RNFS from 'react-native-fs'

const DB_FILE = 'main.realm'
const SETTING = 'Setting'
const MEMO = 'Memo'
export const MEMO_IMAGE_FOLDER = 'memo_images'

export const DOCUMENTS_PATH = 'file://' + RNFS.DocumentDirectoryPath
//export const DOCUMENTS_PATH = ''

let settingRealm = new Realm({
  path: 'setting.realm',
  schema: [{
    name: SETTING,
    primaryKey: 'id',
    properties: {
      id: 'int',
      crypto: 'bool',
      key: 'int'
    }
  }]
});

let settings = settingRealm.objects(SETTING).slice(0, 1)
let settingValue = null
if (settings.length > 0) {
  settingValue = settings[0]
}

getKey = (key4) => {
  return key4[0] | (key4[1] << 8) | (key4[2] << 16) | (key4[3] << 24)
}

export const getCrypto = () => {
  return settingValue != null && settingValue.crypto
}

export const updateSetting = (data) => {
  settingRealm.write(() => {
    settingValue.crypto = data.crypto
    settingValue.key = data.key ? getKey(data.key) : -1
    settingRealm.create(SETTING, settingValue, true)
  });
}

export const writeSetting = (data) => {
  if (settingValue == null) {
    settingRealm.write(() => {
      let v = {id: 0, crypto: data.crypto, key: data.key ? getKey(data.key) : -1}
      settingRealm.create(SETTING, v, true)
      settingValue = v
    });
  } else {
    updateSetting(data)
  }
}

createRealm = (path, key) => {
  var dbschema = {
      name: MEMO,
      primaryKey: 'id',
      properties: {
        id: 'int',
        title: 'string',
        content: 'string',
        date: 'date',
        image: 'string'
      }}
  if (key) {
    if (getKey(key) != settingValue.key) {
      return null
    }
    return new Realm({
      path: path,
      schema: [dbschema]
    })
  } else {
    return new Realm({
      path: path,
      schema: [dbschema]
    })
  }
}

let realm = null
let memo_id = 0
let memos = null

export const initDb = (key4) => {
  try {
    realm =  settingValue == null ? createRealm(DB_FILE, null) :
      createRealm(DB_FILE, settingValue.crypto ? key4 : null)
  } catch (e) {
    return
  }
  if (realm == null) {
    return
  }

  let last_memo = realm.objects(MEMO).sorted('id', true).slice(0, 1)
  memo_id = 0

  if (last_memo.length > 0) {
    memo_id = last_memo[0].id
  }
  memos = realm.objects(MEMO).sorted('date', true)
}

export const writeMemo = (data) => {
  memo_id++
  realm.write(() => {
    if (data.data.image) {
      data.data.image = data.data.image.replace(DOCUMENTS_PATH, '')
    }
    realm.create(MEMO, Object.assign({}, data.data, {id: memo_id}))
  });
}

export const updateMemo = (data) => {
  realm.write(() => {
    if (data.data.image) {
      data.data.image = data.data.image.replace(DOCUMENTS_PATH, '')
    }
    realm.create(MEMO, data.data, true)
  });
}

export const getMemo = () => {
  return memos
}

export const switchMainDB = (crypto, key4, callback) => {
  /*
  var key = crypto ? key4 : null

  let newRealm = createRealm(DB_FILE, key)

  var data = realm.objects(MEMO)
  var prevProgress = 0.0
  if (callback) callback(0.0)
  newRealm.write(() => {
    var prevAll = newRealm.objects(MEMO)
    newRealm.delete(prevAll)

    for (var i = 0; i < data.length; i++) {
      newRealm.create(MEMO, data[i])
      if (callback) {
        var progress = parseFloat(i+1) / parseFloat(data.length)
        if (progress > prevProgress + 0.1) {
          callback(progress)
        }
      }
    }
  })

  realm.write(() => {
    var alldata = realm.objects(MEMO)
    realm.delete(alldata)
  })
  realm = newRealm

  memos = realm.objects(MEMO).sorted('date', true)
  */
  if (callback) callback(1.0)
}

export const deleteMemo = (id) => {
  realm.write(() => {
    var data = realm.objects(MEMO).filtered('id = "' + id + '"');
    realm.delete(data)
  })

  memos = realm.objects(MEMO).sorted('date', true)
}

if (settingValue == null || !settingValue.crypto) {
  initDb(null)
}
