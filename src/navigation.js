 
import { Navigation } from 'react-native-navigation';  
import constant from './constants';  

export function pushAuth() {
    Navigation.setRoot({
        root: {
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
                                                animate: false,
                                                title: {
                                                    text: 'Log-In'
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Login',
                                                icon: require('./images/one.png'),
                                                selectedIcon: require('./images/one.png'),
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
                                            animate: false,
                                            title: {
                                                text: 'Find A Place'
                                            }
                                        }, 
                                            bottomTab: {
                                                text: 'Find Place',
                                                icon: require('./images/two.png') 
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
                                                }
                                            },
                                            bottomTab: {
                                                text: 'Share Place',
                                                icon: require('./images/three.png'), 
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
                    } 
                ]
            }
        }
    });
}



export function pushSharePlace() {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'SHAREPLACE',
                children: [
                {
                    component: {
                        name: constant.SHARE_PLACE_SCREEN
                    }
                }
                ]
            }
        }
    });
}

export function pushFindPlace() {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'FINDPLACE',
                children: [
                {
                    component: {
                        name: constant.FIND_PLACE_SCREEN
                    }
                }
                ]
            }
        }
    });
}