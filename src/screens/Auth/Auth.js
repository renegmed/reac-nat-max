
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
            <View style={styles.inputContainer}>
              <TextInput placeholder="Your E-Mail Address" style={styles.input}/>
              <TextInput placeholder="Password" style={styles.input}/>
              <TextInput placeholder="Confirm" style={styles.input}/>
            </View>
            
            <Button title="Submit" onPress={this.loginHandler} style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
  },
  inputContainer: {
    width: "60%"
  },
  input: {
    width: "100%"
  }
});

export default Auth;
