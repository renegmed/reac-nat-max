import { Navigation } from 'react-native-navigation'; 
import { pushAuth, } from './src/navigation';   

import {registerScreens} from './src/screens'; 
 
export function start () { 
  registerScreens();  
  Navigation.events().registerAppLaunchedListener(() => pushAuth());
}
 