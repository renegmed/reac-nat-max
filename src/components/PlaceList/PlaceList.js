import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
     
    const placesOutput = props.places.map((place, i) => { 
        return (
            <ListItem
              key={i}
              placeName={place.name}
              onItemPressed={() => props.onItemDeleted(i)}
            /> 
        );
    });
    
    return <FlatList 
        style={styles.listContainer}
        data={props.places} 
        renderItem={ (info) => (
            <ListItem
              key={info.item.key}
              placeName={info.item.name}
              placeImage={info.item.image}
              onItemPressed={() => props.onItemSelected(info.item.key)}
            />  
        )}/> 
     
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
