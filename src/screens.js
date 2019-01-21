import {Navigation} from 'react-native-navigation';  
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore'; 
 
import constant from './constants'; 

const store = configureStore();

export function registerScreens() {   

    Navigation.registerComponentWithRedux(
        constant.AUTH_SCREEN, () => require('./screens/Auth/Auth').default, Provider, store);

    Navigation.registerComponentWithRedux(
        constant.SHARE_PLACE_SCREEN, () => require('./screens/SharePlace/SharePlace').default, Provider, store);
    
    Navigation.registerComponentWithRedux(
        constant.FIND_PLACE_SCREEN, () => require('./screens/FindPlace/FindPlace').default, Provider, store);  

   Navigation.registerComponent(
        constant.PLACE_DETAIL_SCREEN, () => require('./screens/PlaceDetail/PlaceDetail').default);  
}
