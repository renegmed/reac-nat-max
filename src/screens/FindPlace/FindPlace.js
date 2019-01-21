import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation' 
import { connect } from 'react-redux'; 

import PlaceList from '../../components/PlaceList/PlaceList'; 

class FindPlace extends Component {  

    // constructor(props) {
    //     super(props);
    //     Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    // }
 
    // navigationButtonPressed({ buttonId }) {
    //     alert("FindPlace buttonId: " + buttonId) 
    // }

    render() { 
        return (
            <View>
                <PlaceList places={this.props.places} />
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
