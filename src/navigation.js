 
import { Navigation } from 'react-native-navigation';  
import constant from './constants';  
import Icon from 'react-native-vector-icons/Ionicons';

export async function pushAuth() {
  
    const auth_image = await Icon.getImageSource("md-log-in", 30);
    const find_place_image = await Icon.getImageSource("md-map", 30);
    const share_place_image = await Icon.getImageSource("ios-share-alt", 30); 
    const menu_image = await Icon.getImageSource("ios-menu", 30); 
    Navigation.setRoot({
        root: {
        sideMenu: {
            left: {
                component: {
                    name: constant.SIDE_DRAWER_SCREEN,
                    passProps: {
                        side: 'left'
                    }
                }
            },
            center: {
            bottomTabs: {
                id: 'AuthTab',
                children: [
                    {
                        stack: {
                            id: 'AUTH',
                            children: [
                                {
                                    component: {
                                        name: constant.AUTH_SCREEN,
                                        options: {
                                            topBar: {
                                                visible: true,
                                                animate: true,
                                                title: {
                                                    text: 'Log-In'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Login',
                                                icon: auth_image,
                                                selectedIcon: auth_image,
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                              topBar: {
                                visible: false
                              }
                            }
                        }
                    },
                    {
                        stack: {
                            id: 'FINDPLACE',
                            children: [
                                {
                                    component: {
                                        name: constant.FIND_PLACE_SCREEN,
                                        options: { 
                                            topBar: {
                                            visible: true,
                                            animate: true,
                                            title: {
                                                text: 'Find A Place'
                                            },
                                            leftButtons: [
                                                {
                                                    id: 'sideDrawerToggle',
                                                    icon: menu_image,
                                                    color: 'green'
                                                }
                                            ]
                                        }, 
                                            bottomTab: {
                                                text: 'Find Place',
                                                icon: find_place_image 
                                            }
                                        } 
                                    }
                                }
                            ]
                        }
                    },
                    {
                        stack: {
                            id: 'SHAREPLACE',
                            children: [
                                {
                                    component: {
                                        name: constant.SHARE_PLACE_SCREEN,
                                        options: {
                                            topBar: {
                                                visible: true,
                                                animate: false,
                                                title: {
                                                    text: 'Share A Place!'
                                                },
                                                leftButtons: [
                                                    {
                                                        id: 'sideDrawerToggle',
                                                        icon: menu_image,
                                                        color: 'red'
                                                    }
                                                ]
                                            },
                                            bottomTab: {
                                                text: 'Share Place',
                                                icon: share_place_image, 
                                            }
                                        }
                                    }
                                } 
                            ],
                            options: {
                              topBar: {
                                visible: true
                              }
                            }
                        }
                    } 
                ],
                options: {
                  bottomTabs: {
                    titleDisplayMode: 'alwaysShow' 
                  }
                }
            }
            } // center
        }
        }  // sideMenu
    }); 
} 
 