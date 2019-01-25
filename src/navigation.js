import { Platform } from 'react-native'; 
import { Navigation } from 'react-native-navigation';  
import constant from './constants';  
import Icon from 'react-native-vector-icons/Ionicons';

export function auth() {
    Navigation.setRoot({
        root: {
            component: {
                name: constant.AUTH_SCREEN,
                options: {
                    topBar: {
                        visible: true,
                        animate: true,
                        title: {
                            text: 'Log-In'
                        }
                    } 
                }
            }
        }    
    });    
}

export async function findPlaces() {
  
    //const auth_image = await Icon.getImageSource("md-log-in", 30);
    const find_place_image = 
        await Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30);
    const share_place_image = 
        await Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt" : "ios-share-alt", 30); 
    const menu_image = 
        await Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30); 

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
                id: 'Main',
                children: [ 
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
                                                icon: find_place_image, 
                                                iconColor: 'red',
                                                selectedIconColor: 'blue',
                                                textColor: 'red',
                                                selectedTextColor: 'blue', 
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
                                                textColor: 'red',
                                                icon: share_place_image, 
                                                iconColor: 'red',
                                                selectedIconColor: 'lightblue', 
                                                selectedTextColor: 'lightblue',
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
        } // root 
    }); 
    // avigation.setRoot({
    //     root: {
    //     sideMenu: {
    //         left: {
    //             component: {
    //                 name: constant.SIDE_DRAWER_SCREEN,
    //                 passProps: {
    //                     side: 'left'
    //                 }
    //             }
    //         },
    //         center: {
    //         bottomTabs: {
    //             id: 'Main',
    //             children: [
    //                 {
    //                     stack: {
    //                         id: 'AUTH',
    //                         children: [
    //                             {
    //                                 component: {
    //                                     name: constant.AUTH_SCREEN,
    //                                     options: {
    //                                         topBar: {
    //                                             visible: true,
    //                                             animate: true,
    //                                             title: {
    //                                                 text: 'Log-In'
    //                                             }
    //                                         },
    //                                         bottomTab: {
    //                                             text: 'Login',
    //                                             icon: auth_image,
    //                                             selectedIcon: auth_image, 
    //                                             iconColor: 'red',
    //                                             selectedIconColor: 'blue',
    //                                             textColor: 'red',
    //                                             selectedTextColor: 'blue',
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         ],
    //                         options: {
    //                           topBar: {
    //                             visible: false
    //                           }
    //                         }
    //                     }
    //                 },
    //                 {
    //                     stack: {
    //                         id: 'FINDPLACE',
    //                         children: [
    //                             {
    //                                 component: {
    //                                     name: constant.FIND_PLACE_SCREEN,
    //                                     options: { 
    //                                         topBar: {
    //                                         visible: true,
    //                                         animate: true,
    //                                         title: {
    //                                             text: 'Find A Place'
    //                                         },
    //                                         leftButtons: [
    //                                             {
    //                                                 id: 'sideDrawerToggle',
    //                                                 icon: menu_image,
    //                                                 color: 'green'
    //                                             }
    //                                         ]
    //                                     }, 
    //                                         bottomTab: {
    //                                             text: 'Find Place',
    //                                             icon: find_place_image, 
    //                                             iconColor: 'red',
    //                                             selectedIconColor: 'blue',
    //                                             textColor: 'red',
    //                                             selectedTextColor: 'blue', 
    //                                         }
    //                                     } 
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 },
    //                 {
    //                     stack: {
    //                         id: 'SHAREPLACE',
    //                         children: [
    //                             {
    //                                 component: {
    //                                     name: constant.SHARE_PLACE_SCREEN,
    //                                     options: {
    //                                         topBar: {
    //                                             visible: true,
    //                                             animate: false,
    //                                             title: {
    //                                                 text: 'Share A Place!'  
    //                                             },
    //                                             leftButtons: [
    //                                                 {
    //                                                     id: 'sideDrawerToggle',
    //                                                     icon: menu_image,
    //                                                     color: 'red'
    //                                                 }
    //                                             ]
    //                                         },
    //                                         bottomTab: {
    //                                             text: 'Share Place',
    //                                             textColor: 'red',
    //                                             icon: share_place_image, 
    //                                             iconColor: 'red',
    //                                             selectedIconColor: 'lightblue', 
    //                                             selectedTextColor: 'lightblue',
    //                                         }
    //                                     }
    //                                 }
    //                             } 
    //                         ],
    //                         options: {
    //                           topBar: {
    //                             visible: true
    //                           }
    //                         }
    //                     }
    //                 } 
    //             ],
    //             options: {
    //               bottomTabs: {
    //                 titleDisplayMode: 'alwaysShow' 
    //               }
    //             }
    //         }
    //         } // center
    //     }
    //     }  // sideMenu
    // }); 
} 
 