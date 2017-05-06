import LocalizedStrings from 'react-native-localization'

export let strings = new  LocalizedStrings({
  en:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "Protect by PIN",
    CryptoContent: "Crypto Data by key containing PIN",
    EnterPin: "Please enter PIN.",
    EnterPin2: "Wrong, Please enter PIN, again."
  },
  ja:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "暗証番号で保護",
    CryptoContent: "データを暗号化して保護",
    EnterPin: "暗証番号を入力してください.",
    EnterPin2: "暗証番号が違います。もう一度入力してください。"
  }
});
