
import React, { Component } from 'react';
import {  View, ImageBackground, Button, StyleSheet } from 'react-native';
import { pushFindPlace } from '../../navigation';

import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import MainText from "../../components/UI/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";

class Auth extends Component {
 
  loginHandler = () => {
    //pushFindPlace();
    alert('Auth login handler')
  }

  render() {
    return (
      <ImageBackground 
          source={backgroundImage}
          style={styles.backgroundImage}
      >
        <View style={styles.container}>

          <MainText>
            <HeadingText>Please Log In</HeadingText> 
          </MainText> 

          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}> 
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <DefaultInput placeholder="Password" style={styles.input}/>
            <DefaultInput placeholder="Confirm" style={styles.input}/>
          </View> 
 
          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Submit</ButtonWithBackground>

        </View>
      </ImageBackground>
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
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  } 
});

export default Auth;
