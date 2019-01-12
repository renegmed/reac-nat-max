 
import { Navigation } from 'react-native-navigation';  
import constant from './constants';  

export function pushAuth() {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'WELCOME',
                children: [
                {
                    component: {
                        name: constant.AUTH_SCREEN
                    }
                }
                ]
            }
        }
    });
}
