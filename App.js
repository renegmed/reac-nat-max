import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component  {

  state = {  
    places: [],
    selectedPlace: null
  }
 
  placeAddedHandler = placeName => {

    //alert(placeName);

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.floor((Math.random() * 1000000) + 1),
          value: placeName,
        })
      };
    });
  };


  placeSelectedHandler = key => { 
    //alert(key)
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState( prevState => {
      return  {
        places: prevState.places.filter( place => { 
          return place.key !== key;
        })
      }
    });
  }
 
  render() {  
    return (
      <View style={styles.container}> 
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } 
});
