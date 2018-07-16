import React, { Component } from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import * as firebase from 'firebase'
import Dimensions from 'Dimensions'

import {
    StyleSheet,
    View,
    Text,
    NavigationBar,
    TouchableOpacity,
    Icon,
    Title,
    ScrollView
} from 'react-native'


import Vendorcards from '../Vendorcards';

export default class Vendoview extends Component {

    async signout() {
        try {
            await firebase.auth().signOut();
            Actions.Signin();
        }
        catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }

    }

    render() {
        return (
            <ScrollView>

                <View>

                    <TouchableOpacity style={styles.buttonStyle} onPress={this.signout.bind(this)} >

                        <Text style={styles.textStyle} >Logout</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>

                        <Text style={styles.textStyle} >View Orders</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>

                        <Text style={styles.textStyle} >Feedback</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>

                        <Text style={styles.textStyle} >Notifications</Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    textStyle: {
        color: 'grey',
        fontSize: 24,
    },
    buttonStyle: {
        top: 25,
        backgroundColor: 'white',
        width: DEVICE_WIDTH,
        height: 60,
    },
});