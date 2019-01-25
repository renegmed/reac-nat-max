import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: 37.7577627,
            longitude: -122.4727052,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                (Dimensions.get("window").width / Dimensions.get("window").height) * 0.0122 
        },
        locationChosen: false
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }     
        });
    }

    render() {
        let marker = null;
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} /> 
        }
        return (
            <View style={styles.container}>
                <MapView 
                    initialRegion={this.state.focusedLocation}
                    region={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                >{marker}</MapView>

                <View style={styles.button}>
                    <Button 
                        title="Locate Me" 
                        onPress={ () => alert('Pick Location!')}/>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: { 
        width: "100%",
        height: 250
    },   
    button: {
        margin: 8, 
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

export default PickLocation;