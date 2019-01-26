import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

 
import { addPlace } from '../../store/actions/index';  
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PickImage from '../../components/PickImage/PickImage'; 
import PickLocation from '../../components/PickLocation/PickLocation'; 
import validate from "../../utility/validation";

class SharePlace extends Component { 
 
    state = {
        controls: {
            placeName: {
                value: "",
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                }
            },
            location: {
                value: null,
                valid: false
            }
        } 
    };

    // constructor(props) {
    //     super(props);
    //     this.props.navigator.setOnNavigationEvent(this.onNavigationEvent);        
    // }

    // onNavigatorEvent = event => {
    //     if (event.type === "NavBarButtonPress") {
    //         if (event.id === "sideDrawerToggle") {
    //             this.props.navigator.toggleDrawer({
    //                 side: "left"
    //             })
    //         }
    //     }
    // }

    componentDidMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
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

    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(val, prevState.controls.placeName.validationRules),
                        touched: true
                    }
                }
            }  
        })
    }

    locationPickedHandler = location => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        valid: true,
                    }
                }
            }
        })
    }

    placeAddedHandler = async () => {
       
        await this.props.onAddPlace(
            this.state.controls.placeName.value,
            this.state.controls.location.value);
        
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: "",
                        valid: false,
                        touched: false
                    }
                }
            }
        })
              
    }
    
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                   
                    <PickImage />

                    <PickLocation onLocationPick={this.locationPickedHandler}/>
                    
                    <PlaceInput 
                        placeData={this.state.controls.placeName}
                        onChangeText={this.placeNameChangedHandler} />

                    <View style={styles.button}>
                        <Button title="Share the Place!" 
                            onPress={this.placeAddedHandler}
                            disabled={
                                !this.state.controls.placeName.valid || 
                                !this.state.controls.location.valid}
                        /> 
                    </View>
                    
                </View>  
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8,

    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location))
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);
