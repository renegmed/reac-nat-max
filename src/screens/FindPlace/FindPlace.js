import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation} from 'react-native-navigation' 
import { connect } from 'react-redux'; 

import PlaceList from '../../components/PlaceList/PlaceList'; 
import constant from '../../constants'; 

class FindPlace extends Component {   
    
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
    render() { 
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps)(FindPlace);
