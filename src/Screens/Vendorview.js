import React, { Component } from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import * as firebase from 'firebase'
import FirebaseInit from '../FirebaseInit';


import {
    StyleSheet,
    View,
    Text,
    NavigationBar,
    TouchableOpacity,
    Alert,
    ToastAndroid,
    Icon,
    Title,
    ScrollView
} from 'react-native'


import Vendorcards from '../Vendorcards';

export default class Vendoview extends Component {

    onPressParagon() {
        Actions.Foodview()
    }

    onPressFetchData(vendorName) {
        if (!firebase.apps.length) {
            FirebaseInit.initialise();
            ToastAndroid.show('Initialised', ToastAndroid.SHORT);
        }

        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var now = new Date();
        var day = days[ now.getDay() ];

        var user = firebase.auth().currentUser;
        userID = user.uid;

        firebase.database().ref('/vendor/Monday/'+vendorName).on('value', (snapshot) => {
            const userObj = snapshot.val();
            var dishes = userObj.dishname;
            Actions.Foodview({dishes, userID});
          });

    }

    render() {
        return (

            <ScrollView>

                <View >

                    <Vendorcards Name='Paragon' imgLoc={require('../../image/paragon.jpg')} onPressFunction={this.onPressFetchData.bind(this, 'Paragon')}  />
                    <Vendorcards Name='Olive' imgLoc={require('../../image/olive.jpg')} onPressFunction={this.onPressFetchData.bind(this, 'Olive')} />
                    <Vendorcards Name='French Toast' imgLoc={require('../../image/ft.jpg')} onPressFunction={this.onPressFetchData.bind(this, 'FrenchToast')}  />
                    <Vendorcards Name='Sneha' imgLoc={require('../../image/paragon.jpg')} onPressFunction={this.onPressFetchData.bind(this, 'Sneha')}/>
                    <Vendorcards Name='The Cookery' imgLoc={require('../../image/paragon.jpg')} onPressFunction={this.onPressFetchData.bind(this, 'The Cookery')}/>
                    <Vendorcards Name='Restuarant 3' imgLoc={require('../../image/paragon.jpg')} />
                    <Vendorcards Name='Restuarant 4' imgLoc={require('../../image/paragon.jpg')} />
                    <Vendorcards Name='Restuarant 5' imgLoc={require('../../image/paragon.jpg')} />



                </View>
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }

});