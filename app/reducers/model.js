import Realm from 'realm'

const MEMO = 'Memo'

let realm = new Realm({
  schema: [{
    name: MEMO,
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      content: 'string',
      date: 'date'
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
    realm.create(MEMO, Object.assign({}, data.data, {id: memo_id}));
  });
}

export const getMemo = () => {
  let ret = realm.objects(MEMO);
  if (ret == null) {
    return []
  }
  return ret
}
