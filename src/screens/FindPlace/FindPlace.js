import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Navigation} from 'react-native-navigation' 
import { connect } from 'react-redux'; 

import PlaceList from '../../components/PlaceList/PlaceList'; 
import constant from '../../constants'; 
import { getPlaces } from "../../store/actions/index";

class FindPlace extends Component {   
    
    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        placesAnim: new Animated.Value(0)
    }

    // constructor(props) {
    //     super(props);
    //     this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    // }

    // onNavigatorEvent = event => {
    //     if (event.type === "NavBarButtonPress") {
    //         if (event.id === "sideDrawerToggle") {
    //             this.props.navigator.toggleDrawer({
    //             side: "left"
    //         });
    //     }
    //   }
    // };

    componentDidMount() {
        // this.navigationEventListener = Navigation.events().bindComponent(this);
        this.props.onLoadPlaces();
    }
      
    componentWillUnmount() {
        // Not mandatory
        if (this.navigationEventListener) {
          this.navigationEventListener.remove();
        }
    }
    
    navigationButtonPressed({ buttonId }) { 
        switch(buttonId) {
            case 'sideDrawerToggle':             
                Navigation.mergeOptions(this.props.componentId, {
                    sideMenu: {
                        left: {
                            visible: true
                        }
                    }
                });
                break;
            default:
                break;     
        } 
    }

    itemSelectedHandler = key => { 
        const selPlace = this.props.places.find( place => {
            return place.key === key;
        });
  
        Navigation.push(this.props.componentId, {
            component: {
                name: constant.PLACE_DETAIL_SCREEN,
                passProps: {
                    selectedPlace: selPlace
                }
            },
            options: {
                topBar: {
                    title: {
                        text: selPlace 
                    }
                }
            }  
        });
    }

    placesLoadedHandler = () => {
        Animated.timing(this.state.placesAnim, {
            toValue: 1,
            duration: 500,
            userNativeDriver: true
        }).start();
    }

    placesSearchHandler = () => {
       Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            userNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });
    }

    render() {  
        let content = (
            <Animated.View
                style={{
                    opacity: this.state.removeAnim,
                    transform: [
                        {
                            scale: this.state.removeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [12, 1]
                            })
                        }
                    ]
                }}    >
                <TouchableOpacity onPress={ this.placesSearchHandler }>
                    <View style={styles.searchButton} >
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
           
        )
        
        if (this.state.placesLoaded) {
            content = (
                <Animated.View 
                    style={{
                        opacity: this.state.placesAnim
                    }}    
                >
                    <PlaceList 
                        places={this.props.places} 
                        onItemSelected={this.itemSelectedHandler} />
                </Animated.View> 
            );
        }

        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
               {content}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: 'orange',
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
})
const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLoadPlaces: () => dispatch(getPlaces())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPlace);
