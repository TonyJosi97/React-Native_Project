import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { Actions, ActionConst } from 'react-native-router-flux'
import * as firebase from 'firebase';


import GLOBALS from '../global/Globals';
import Background from '../Background.js';
import Logo from '../Logo.js';
import FirebaseInit from '../FirebaseInit';


import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native'


export default class Signup extends Component {

  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      FirebaseInit.initialise();
    }

    this.state = {
      mailID: '',
      password: '',
      response: 'Please enter a mail ID with @gmail domain'
    }
  }

  async sendVerificationMail() {
    try {
      await firebase.auth().onAuthStateChanged(function (user) {
        user.sendEmailVerification();
      });
    }
    catch (error) {
      ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
    }
  }

  async signup() {


    try {
      var idx = this.state.mailID.trim().indexOf('@gmail.com');
      if (idx > -1) {
        await firebase.auth().createUserWithEmailAndPassword(this.state.mailID.trim(), this.state.password.trim());
        this.sendVerificationMail();
        var user = firebase.auth().currentUser;
        userID = user.uid;
        var userData = {isVendor : 'no'};
        await firebase.database().ref('/users/' + userID).set(userData);
        this.setState({
          response: "Account Created. Please check your mail " + this.state.mailID + " to verify your mail ID"
        });
      }
      else {
        //ToastAndroid.show('Please enter a mail ID with @gmail domain', ToastAndroid.SHORT);
      }

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }

    ToastAndroid.show(this.state.response, ToastAndroid.SHORT);

  }


  toLogin() {
    ToastAndroid.show('Back ', ToastAndroid.SHORT);
  }

  goToSignin() {
    Actions.pop()
  }

  render() {
    return (

      <Background>

        <Logo />

        <View>

          <TextInput
            style={styles.textStyle}
            placeholder='Enter TCS Mail ID'
            returnKeyType={'done'}
            onChangeText={(text) => this.setState({ mailID: text })}
          />

          <TextInput
            style={styles.textStyle}
            placeholder='Create Password'
            secureTextEntry={true}
            returnKeyType={'done'}
            onChangeText={(text) => this.setState({ password: text })}
          />


          <TouchableOpacity
            style={styles.btnStyle}
            onPress={this.signup.bind(this)}
          >
            <Text style={styles.btnText}> Get Email Verification </Text>
          </TouchableOpacity>

          <Text style={styles.infoText1}> We will send a verification mail to your TCS mail ID.</Text>
          <Text style={styles.infoText2}> Please verify your mail to Login. </Text>

          <TouchableOpacity
            style={styles.newUser}
            onPress={this.goToSignin.bind(this)}
          >
            <Text style={styles.newUserText}> Login Now </Text>
          </TouchableOpacity>

        </View>

      </Background>

    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  btnText: {
    left: -5,
    top: 5,
    color: "white"
  },

  textStyle: {
    left: 20,
    paddingLeft: 8,
    width: DEVICE_WIDTH - 40,
    height: 45,
    color: GLOBALS.primaryTextColor,
    fontSize: 24,
  },

  forgotPs: {
    top: 8,
    left: 110,
  },

  checkBoxText: {
    top: 8,
    left: 15,
    color: GLOBALS.secondaryTextColor,
  },

  forgotPsText: {
    color: GLOBALS.linkTextColor,
  },

  infoText1: {
    top: 48,
    left: 40,
    alignItems: 'center',
    color: GLOBALS.secondaryTextColor,
  },

  infoText2: {
    top: 48,
    left: 75,
    alignItems: 'center',
    color: GLOBALS.secondaryTextColor,
  },

  btnStyle: {
    backgroundColor: GLOBALS.linkTextColor,
    alignItems: 'center',
    top: 35,
    left: DEVICE_WIDTH / 2 - ((DEVICE_WIDTH - 200) / 2),
    paddingLeft: 8,
    width: DEVICE_WIDTH - 200,
    height: 30,
  },

  checkBoxStyle: {
    left: 20,
  },

  newUser: {
    top: 60,
    alignItems: 'center',
  },

  newUserText: {
    color: GLOBALS.linkTextColor,

  },

});

