
import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
 
class Auth extends Component {
 
  render() {
    return (
      <View style={styles.flex}> 
            <Text>Auth Screen</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Auth;
