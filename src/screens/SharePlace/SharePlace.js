import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';  

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
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>  
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);
