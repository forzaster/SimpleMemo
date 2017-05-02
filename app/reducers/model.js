import Realm from 'realm'

const SETTING = 'Setting'

let settingRealm = new Realm({
  path: 'setting.realm',
  schema: [{
    name: SETTING,
    primaryKey: 'id',
    properties: {
      id: 'int',
      crypto: 'int'
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
    let v = Object.assign({}, data.data, settingValue)
    settingRealm.create(SETTING, v, true)
    settingValue = v
  });
}

export const writeSetting = (data) => {
  if (settingValue == null) {
    settingRealm.write(() => {
      let v = Object.assign({}, data.data, {id: 0})
      settingRealm.create(SETTING, v, true)
      settingValue = v
    });
  } else {
    updateSetting(data)
  }
}

const MEMO = 'Memo'

let realm = new Realm({
  path: 'main.realm',
  schema: [{
    name: MEMO,
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      content: 'string',
      date: 'date',
      image: 'string'
    }}]
});


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
