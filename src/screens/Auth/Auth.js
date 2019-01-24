
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
    viewMode: Dimensions.get("window").height < 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      }
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);  
  }

  componentWillUnmount() {
    Dimensions.addEventListener("change", this.updateStyles);  
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape" 
    }); 
  }
  loginHandler = () => {
    //pushFindPlace();
    alert('Auth login handler')
  }

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value
          }
        }
      }
    })
  }
  render() {
    let headingText = null;
    if (this.state.viewMode === "portrait") {
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

            <DefaultInput 
              placeholder="Your E-Mail Address" 
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText = { (val) => this.updateInputState("email",val)}
            />
            
            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer }>
              <View style={ this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                <DefaultInput 
                  placeholder="Password" 
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={ (val) => this.updateInputState("password", val)}
                />
              </View> 
              <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                <DefaultInput 
                  placeholder="Confirm" 
                  style={styles.input}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={ (val) => this.updateInputState("confirmPassword", val)}
                />
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
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }  
});

export default Auth;
