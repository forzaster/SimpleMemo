import LocalizedStrings from 'react-native-localization'

export let strings = new  LocalizedStrings({
  en:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "Protect by PIN",
    CryptoContent: "Crypto DB by key containing PIN"
  },
  ja:{
    OK: "OK",
    Cancel: "Cancel",
    Home: "Home",
    Settings: "Settings",
    Crypto: "暗証番号で保護",
    CryptoContent: "データベースを暗号化して保護"
  }
});
