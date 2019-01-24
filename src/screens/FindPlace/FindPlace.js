import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation} from 'react-native-navigation' 
import { connect } from 'react-redux'; 

import PlaceList from '../../components/PlaceList/PlaceList'; 
import constant from '../../constants'; 

class FindPlace extends Component {   
    
    state = {
        placesLoaded: false
    }

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

    placesSearchHandler = () => {
        this.setState({
            placesLoaded: true
        });
    }
    render() { 
        let content = (
            <TouchableOpacity onPress={ this.placesSearchHandler }>
                <View style={styles.searchButton} >
                    <Text style={styles.searchButtonText}>Find Place</Text>
                </View>
            </TouchableOpacity>
        )
        
        if (this.state.placesLoaded) {
            content = (
                <PlaceList 
                    places={this.props.places} 
                    onItemSelected={this.itemSelectedHandler} />
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
    listContainer: {

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
export default connect(mapStateToProps)(FindPlace);
