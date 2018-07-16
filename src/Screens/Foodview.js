import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { Actions, ActionConst } from 'react-native-router-flux'
import * as firebase from 'firebase'


import GLOBALS from '../global/Globals';
import Background from '../Background.js';
import Foodcards from '../Foodcards.js';

const DEVICE_WIDTH = Dimensions.get('window').width;

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ToastAndroid,
} from 'react-native'

export default class Foodview extends Component {

    async onOrder() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '-' + dd + '-' + yyyy;

        await firebase.database().ref('/orders/' + userID + '/' + today).push(this.state.foodBasket)
        ToastAndroid.show('Order Placed Successfully', ToastAndroid.SHORT);
        Actions.OrderConfirmed();

    }

    updateFoodBasket(ordData) {
        let oldData = this.state.foodBasket;
        oldData.push(ordData);
        this.setState({
            foodBasket: oldData
        })
    }

    myCallback = (orderData) => {
        this.updateFoodBasket(orderData)
    }

    returnFoodCard(text1, text2, text3) {
        return <Foodcards itemID={text3.trim()} Name={text1.trim()} Rate={text2.trim()} callbackFromParent={this.myCallback.bind(this)} />

    }

    renderMenu() {
        var fetchedJSON = this.props.dishes;
        var fetchedString = JSON.stringify(fetchedJSON);
        var i = 0;
        var arrayOfLines = fetchedString.split(",")
        return arrayOfLines.map((line) => {
            var arr = line.split('$');
            var foodData = arr[0].replace(/"/g, '').replace(/}/g, '');
            var foodID = foodData.split(':')[0]
            return this.returnFoodCard(arr[1].replace(/"/g, '').replace(/}/g, ''), arr[2].replace(/"/g, '').replace(/}/g, ''), foodID);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            foodBasket: [],
        }
    }

    render() {


        return (

            <ScrollView>

                <View style={styles.Container}>

                    {this.renderMenu()}

                    <TouchableOpacity
                        style={styles.orderBtnStyle}
                        onPress={this.onOrder.bind(this)}
                    >
                        <Text style={styles.orderBtnText}>CONFIRM ORDER</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

    Container: {
        top: 5,
        flex: 1,
        backgroundColor: "white",
    },

    btnStyle: {
        backgroundColor: GLOBALS.linkTextColor,
        alignItems: 'center',
        top: 400,
        left: DEVICE_WIDTH / 2 - ((DEVICE_WIDTH - 250) / 2),
        paddingLeft: 8,
        width: DEVICE_WIDTH - 250,
        height: 30,
    },

    btnText: {
        left: -5,
        top: 5,
        color: "white"
    },

    orderBtnStyle: {
        backgroundColor: 'orange',
        alignItems: 'center',
        left: DEVICE_WIDTH / 2 - ((DEVICE_WIDTH - 250) / 2),
        paddingLeft: 8,
        bottom: 40,
        width: DEVICE_WIDTH - 250,
        height: 30,
    },

    orderBtnText: {
        left: -5,
        top: 5,
        color: "white"
    }

});