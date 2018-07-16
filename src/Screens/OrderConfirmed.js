import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Alert,
	ToastAndroid,
	CheckBox,
} from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import firebase from 'firebase';


import Background from '../Background.js';
import Logo from '../Logo.js';

export default class Signin extends Component {
    render() {
		return (
            <Background>

            <Logo />

                <Text style={styles.orderConfirmText}> Your order is confirmed</Text>

            </Background>

		);
	}
}


const styles = StyleSheet.create({

    orderConfirmText: {
        top: 50,
        left: 100
    }

});