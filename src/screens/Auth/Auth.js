
import React, { Component } from 'react';
import {  View, ImageBackground, Button, StyleSheet, Dimensions } from 'react-native';
import { pushFindPlace } from '../../navigation';

import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import MainText from "../../components/UI/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";

class Auth extends Component {
 
  state = {
    respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    }
  }
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", (dims) => { 
      this.setState({
        respStyles: {
          pwContainerDirection: 
            Dimensions.get('window').height > 500 ? "column" : "row",
          pwContainerJustifyContent: 
            Dimensions.get('window').height > 500 ? "flex-start" :"space-between",
          pwWrapperWidth: 
            Dimensions.get('window').height > 500 ? "100%" : "45%"
        }
      }); 
    })  
  }

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
            <View style={{
              flexDirection: this.state.respStyles.pwContainerDirection,
              justifyContent: this.state.respStyles.pwContainerJustifyContent
            }}>
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
              }}>
                <DefaultInput placeholder="Password" style={styles.input}/>
              </View> 
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
                }}>
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
  } 
});

export default Auth;
