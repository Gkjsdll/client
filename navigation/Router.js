import {
  createRouter,
} from '@exponent/ex-navigation';

/* Auth Screens */
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

/* Tab Bar Screens */
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

/* Other Screens */
import ChooseLocationScreen from '../screens/ChooseLocationScreen';
import ChefPageViewScreen from '../screens/ChefPageViewScreen';
import ConfirmEventScreen from '../screens/ConfirmEventScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import MapScreen from '../screens/MapScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  auth: () => AuthScreen,
  login: () => LoginScreen,
  signup: () => SignupScreen,
  search: () => SearchScreen,
  searchResults: () => SearchResultsScreen,
  map: () => MapScreen,
  home: () => HomeScreen,
  upcoming: () => UpcomingScreen,
  profile: () => ProfileScreen,
  settings: () => SettingsScreen,
  chooseLocation: () => ChooseLocationScreen,
  chefPageView: () => ChefPageViewScreen,
  confirmEvent: () => ConfirmEventScreen,
  rootNavigation: () => RootNavigation,
}));