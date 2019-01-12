import React from 'react';
import { Navigation } from 'react-native-navigation'; 
import { Provider } from 'react-redux';
import { pushAuth, } from './src/navigation'; 

import constant from './src/constants';  

import configureStore from './src/store/configureStore'; 

function WrappedComponent(Component) {

  const store = configureStore();
  
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store} >
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

function registerScreens() { 
    Navigation.registerComponent(constant.AUTH_SCREEN, () => WrappedComponent(require('./src/screens/Auth/Auth').default));  
    Navigation.registerComponent(constant.SHARE_PLACE_SCREEN, () => WrappedComponent(require('./src/screens/SharePlace/SharePlace').default)); 
    Navigation.registerComponent(constant.FIND_PLACE_SCREEN, () => WrappedComponent(require('./src/screens/FindPlace/FindPlace').default));     
}

export function start () { 
  registerScreens();  
  Navigation.events().registerAppLaunchedListener(() => pushAuth());
}

// import React, {Component} from 'react';
// import {StyleSheet, View, TextInput, Button} from 'react-native';
// import { connect } from 'react-redux';
// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import {addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

// class App extends Component  { 
 
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   modalCloseHandler = () => {
//     this.props.onDeselectPlace();    
//   };

//   placeSelectedHandler = key => {  
//     this.props.onSelectPlace(key);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   }
 
//   render() {  
//     return (
//       <View style={styles.container}> 
//         <PlaceDetail 
//           selectedPlace={this.props.selectedPlace} 
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalCloseHandler}/>
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
       
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   } 
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace()),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
