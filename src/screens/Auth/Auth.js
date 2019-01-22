
import React, { Component } from 'react';
import {  View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { pushFindPlace } from '../../navigation';

class Auth extends Component {
 
  loginHandler = () => {
    pushFindPlace();
  }

  render() {
    return (
      <View style={styles.container}> 
            <Text>Please Log In</Text> 
            <Button title="Switch to Login" onPress={this.loginHandler}/>
            <TextInput placeholder="Your E-Mail Address"/>
            <TextInput placeholder="Password" />
            <TextInput placeholder="Confirm" />
            <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export default Auth;
