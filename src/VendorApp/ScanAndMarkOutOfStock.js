import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux'
export default class ScanAndMarkOutOfStock extends Component {

  scanorder() {
    ToastAndroid.show('scanning order!!', ToastAndroid.SHORT);
  }

  goToSoldout() {
    //Actions.Soldout()
    ToastAndroid.show('Sold Out', ToastAndroid.SHORT);
  }

  render() {
    return (

      <View>
        <Text style={styles.text1}> VENDOR LOGIN</Text>

        <TouchableOpacity style={styles.scanorder}
          onPress={this.scanorder.bind(this)}
        >


          <Text style={styles.text}> SCAN ORDER</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.soldout}
          onPress={this.goToSoldout.bind(this)}
        >
          <Text style={styles.text}> SOLD OUT </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  soldout: {
    backgroundColor: 'rgb(30,132,70)',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    top: 150,
    marginTop: 10,

  },
  scanorder: {
    backgroundColor: 'rgb(30,132,70)',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    top: 100,
    marginTop: 10,

  },
  text: {
    fontSize: 30,
    alignItems: 'center',
    padding: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 25,
    alignItems: 'center',
    padding: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 40,
    textDecorationLine: 'underline',
    color: 'rgb(243,156,18)',


  }



});