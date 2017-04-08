import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen'

const App = StackNavigator({
  MainScreen: { screen: MainScreen },
});

export default App
