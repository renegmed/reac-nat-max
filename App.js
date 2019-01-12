import React from 'react';
import { Navigation } from 'react-native-navigation'; 
import { Provider } from 'react-redux';
import { pushAuth, } from './src/navigation'; 
import Auth from './src/screens/Auth/Auth';
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';

import constant from './src/constants';   
import configureStore from './src/store/configureStore'; 

const store = configureStore();
 

function registerScreens() { 
    Navigation.registerComponent(constant.AUTH_SCREEN, () => Auth, store, Provider);  
    Navigation.registerComponent(constant.SHARE_PLACE_SCREEN, () => SharePlace, store, Provider); 
    Navigation.registerComponent(constant.FIND_PLACE_SCREEN, () => FindPlace, store, Provider);     
}

export function start () { 
  registerScreens();  
  Navigation.events().registerAppLaunchedListener(() => pushAuth());
}
 