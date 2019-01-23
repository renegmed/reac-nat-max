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

class SharePlace extends Component { 
 
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

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);   
    }
    
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                   
                    <PickImage />

                    <PickLocation />
                    
                    <PlaceInput />

                    <View style={styles.button}>
                        <Button title="Share the Place!" 
                            onPress={ () => alert('Share the Place!')}
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
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);
