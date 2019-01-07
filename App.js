import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component  {

  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => { 
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState( prevState => {  
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
   
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val 
    })
  }
  render() { 

    const placesOutput = this.state.places.map( ( place, i ) => {
      return (
        <ListItem key={i} 
          placeName={place} 
          onItemPressed={ () => alert("Item press - ID " + i)}/>
      );
    }) 

    return (
      <View style={styles.container}> 
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          /> 
          <Button title="Add" 
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            />  
        </View>

        <View style={styles.listContainer}> 
          {placesOutput} 
        </View>
       
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
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center' 
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }, 
  listContainer: {
    width: "100%"
  } 
});
