import Realm from 'realm'

const SETTING = 'Setting'

let settingRealm = new Realm({
  path: 'setting.realm',
  schema: [{
    name: SETTING,
    primaryKey: 'id',
    properties: {
      id: 'int',
      crypto: 'bool',
      key: 'data'
    }
  }]
});

let settings = settingRealm.objects(SETTING).slice(0, 1)
let settingValue = null
if (settings.length > 0) {
  settingValue = settings[0]
}

export const updateSetting = (data) => {
  settingRealm.write(() => {
    let v = Object.assign({}, data, settingValue)
    settingRealm.create(SETTING, v, true)
    settingValue = v
  });
}

export const writeSetting = (data) => {
  if (data.crypto) {
    var key = new ArrayBuffer(64)
    data = Object.assign({}, data, {key: key})
  }
  if (settingValue == null) {
    settingRealm.write(() => {
      let v = Object.assign({}, data, {id: 0})
      settingRealm.create(SETTING, v, true)
      settingValue = v
    });
  } else {
    updateSetting(data)
  }
}

const MEMO = 'Memo'

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
    return new Realm({
      path: path,
      encryptionKey: key,
      schema: [dbschema]
    })
  } else {
    return new Realm({
      path: path,
      schema: [dbschema]
    })
  }
}

let realm =  settingValue == null ? createRealm('main.realm', null) :
  createRealm(
    settingValue.crypto ? 'maincrypto.realm' : 'main.realm',
    settingValue.crypto ? new Int8Array(settingValue.key) : null)

let last_memo = realm.objects(MEMO).sorted('id', true).slice(0, 1)
let memo_id = 0

if (last_memo.length > 0) {
  memo_id = last_memo[0].id
}
let memos = realm.objects(MEMO)

export const writeMemo = (data) => {
  memo_id++
  realm.write(() => {
    realm.create(MEMO, Object.assign({}, data.data, {id: memo_id}))
  });
}

export const updateMemo = (data) => {
  realm.write(() => {
    realm.create(MEMO, data.data, true)
  });
}

export const getMemo = () => {
  let ret = realm.objects(MEMO)
  if (ret == null) {
    return []
  }
  return ret
}

export const switchMainDB = (crypto, callback) => {
  var key = crypto ? new Int8Array(settingValue.key) : null
  var dbname = crypto ? 'maincrypto.realm' : 'main.realm'
  let newRealm = createRealm(dbname, key)

  var data = realm.objects(MEMO)
  var prevProgress = 0.0
  if (callback) callback(0.0)
  for (var i = 0; i < data.length; i++) {
    newRealm.write(() => {
      newRealm.create(MEMO, data[i])
    })
    if (callback) {
      var progress = parseFloat(i+1) / parseFloat(data.length)
      if (progress > prevProgress + 0.1) {
        callback(progress)
      }
    }
  }

  realm.write(() => {
    var alldata = realm.objects(MEMO)
    realm.delete(alldata)
  })
  realm = newRealm

  if (callback) callback(1.0)
}
