
import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet } from 'react-native';
import { pushFindPlace } from '../../navigation';

class Auth extends Component {
 
  loginHandler = () => {
    pushFindPlace();
  }

  render() {
    return (
      <View style={styles.flex}> 
            <Text>Auth Screen</Text> 
            <Button title="Login" onPress={this.loginHandler} />
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
