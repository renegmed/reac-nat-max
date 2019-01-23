
import React, { Component } from 'react';
import {  View, ImageBackground, Button, StyleSheet, Dimensions } from 'react-native';
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
    let headingText = null;
    if (Dimensions.get('window').height > 500) {
      headingText = ( 
          <MainText>
            <HeadingText>Please Log In</HeadingText> 
          </MainText> 
      );
    }
    return (
      <ImageBackground 
          source={backgroundImage}
          style={styles.backgroundImage}
      >
        <View style={styles.container}>

          {headingText}

          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}> 
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordWrapper}>
                <DefaultInput placeholder="Password" style={styles.input}/>
              </View> 
              <View style={styles.passwordWrapper}>
                <DefaultInput placeholder="Confirm" style={styles.input}/>
              </View> 
            </View>
            
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
  },
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: "45%"
  } 
});

export default Auth;
