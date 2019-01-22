
import React, { Component } from 'react';
import {  View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { pushFindPlace } from '../../navigation';

import DefaultInput from "../../components/UI/DefaultInput";

class Auth extends Component {
 
  loginHandler = () => {
    pushFindPlace();
  }

  render() {
    return (
      <View style={styles.container}> 
            <Text>Please Log In</Text> 
            <Button title="Switch to Login" onPress={this.loginHandler} />
            <View style={styles.inputContainer}> 
              <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
              <DefaultInput placeholder="Password" style={[styles.input, { borderColor: "red" } ]}/>
              <DefaultInput placeholder="Confirm" style={styles.input}/>
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
    backgroundColor: "#eee",
    borderColor: "#bbb"

  } 
});

export default Auth;
