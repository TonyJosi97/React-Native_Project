import React, { Component } from 'react';
import Dimensions from 'Dimensions';



import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    ScrollView,
    Image,
} from 'react-native'


import GLOBALS from './global/Globals';


export default class Foodcards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
        }
    }

    onPressPlus(text1, text2, text3) {
        var orderData = [
            foodItemID = text1,
            foodItemName = text2,
            foodItemPrice = text3
        ]
        var qty = this.state.quantity;
        qty = qty + 1;
        this.setState({
            quantity: qty
        });
        this.props.callbackFromParent(orderData);
    }

    onPressMinus() {
        ToastAndroid.show(this.state.quantity.toString(), ToastAndroid.SHORT);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.buttonContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textStyle} >{this.props.Name}</Text>
                            <Text style={styles.rateStyle} >{this.props.Rate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.touchableContainer} onPress={this.onPressMinus.bind(this)} >
                                <Image
                                    source={require('../image/minus.png')}
                                    style={styles.quantityMinusImageStyle} />
                            </TouchableOpacity>

                            <TextInput
                                style={styles.textStylePlaceholder}
                                placeholder={this.state.quantity.toString()}
                                returnKeyType={'done'}
                                onChangeText={(text) => this.setState({ quantity: text })}
                            />

                            <TouchableOpacity style={styles.touchableContainer} onPress={this.onPressPlus.bind(this, this.props.itemID, this.props.Name, this.props.Rate)}>
                                <Image
                                    source={require('../image/plus.png')}
                                    style={styles.quantityPlusImageStyle} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
    },
    touchableContainer: {
        width: DEVICE_WIDTH,
        alignItems: 'center',
    },
    textStyle: {
        left: 10,
        color: 'white',
        fontSize: 24,
    },
    rateStyle: {
        top: 4,
        left: 50,
        color: 'white',
        fontSize: 16,
    },
    textStylePlaceholder: {
        color: 'white',
        fontSize: 24,
        justifyContent: 'center',
    },
    buttonContainer: {
        top: 15,
        padding: 5,
        borderRadius: 10,
        height: 150,
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
    },
    quantityMinusImageStyle: {
        left: 120,
        resizeMode: 'contain',
        width: 45,
        height: 45,
    },
    quantityPlusImageStyle: {
        left: -110,
        top: 2,
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
})