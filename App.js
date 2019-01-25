import { Navigation } from 'react-native-navigation'; 
import { auth } from './src/navigation';   

import {registerScreens} from './src/screens'; 
 
export function start () { 
  registerScreens();  
  Navigation.events().registerAppLaunchedListener(() => auth());
}
 