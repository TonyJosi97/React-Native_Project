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


export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
			FirebaseInit.initialise();
		}

        this.state = {
            mailID: '',
            response: 'Initial'
        }
    }

    async resetPassword()
    {
        try {
            await firebase.auth().sendPasswordResetEmail(this.state.mailID.toString().trim());
            ToastAndroid.show('Please check your mail for resetting Password', ToastAndroid.SHORT);

        }
        catch (error) {
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        }
    }

    reset() {
        var mailid = this.state.mailID
        if(mailid != '')
        {
            this.resetPassword()
        }
        else
        {
            ToastAndroid.show('Enter a valid mail ID', ToastAndroid.SHORT);
        }
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

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={this.reset.bind(this)}
                    >
                        <Text style={styles.btnText}> RESET PASSWORD </Text>
                    </TouchableOpacity>

                    <Text style={styles.infoText1}> We will send a mail to reset your Password </Text>
                    <Text style={styles.infoText2}> to your TCS mail ID. </Text>
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
        left: 70,
        alignItems: 'center',
        color: GLOBALS.secondaryTextColor,
    },

    infoText2: {
        top: 48,
        left: 120,
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

