import LocalizedStrings from 'react-native-localization'

export let strings = new  LocalizedStrings({
  en:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "Protect by PIN",
    CryptoContent: "4 digit PIN code",
    EnterPin: "Please enter PIN.",
    EnterPin2: "Wrong, Please enter PIN, again.",
    Delete: "Delete"
  },
  ja:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "暗証番号で保護",
    CryptoContent: "４桁の暗証番号",
    EnterPin: "暗証番号を入力してください.",
    EnterPin2: "暗証番号が違います。もう一度入力してください。",
    Delete: "削除"
  }
});
