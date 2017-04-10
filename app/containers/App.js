import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen'
import SettingScreen from './SettingScreen'

const App = StackNavigator({
  MainScreen: { screen: MainScreen },
  SettingScreen: { screen: SettingScreen },
});

export default App
