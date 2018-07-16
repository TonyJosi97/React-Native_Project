import React, { Component } from 'react';
import Dimensions from 'Dimensions';



import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'


import GLOBALS from './global/Globals';


export default class Vendorcards extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <TouchableOpacity onPress={this.props.onPressFunction} >
                    <View elevation={5} style={styles.buttonContainer}>
                        <Text style={styles.textStyle} >{this.props.Name}</Text>
                        <Image style={styles.imagestyle} source={this.props.imgLoc} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Container: {
        top: 5,
        flex: 1,
        backgroundColor: "white",
    },
    textStyle: {
        color: 'white',
        padding:10,
        fontSize: 24,
    },
    buttonContainer: {
        top: 15,
        paddingBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:'orange',
    },
    imagestyle: {
        height: 205,
        width: DEVICE_WIDTH,
    }
})