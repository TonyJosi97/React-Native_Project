
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Picker, TouchableOpacity, ToastAndroid } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux'


export default class App extends Component {
  soldout() {
    ToastAndroid.show('dish sold out!!', ToastAndroid.SHORT);
  }
  toVendor2() {
    ToastAndroid.show('Back ', ToastAndroid.SHORT);
  }
  goToVendor2() {
    Actions.pop()
  }

  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.text1}> VENDOR LOGIN</Text>


        <Picker
          style={{ width: '80%', top: 100 }}
          selectedValue={this.state.Vendor}
          onValueChange={(vendor) => this.setState({ Vendor: vendor })}>
          <Picker.Item label="select vendor" value="" />
          <Picker.Item label="Paragon" value="paragon" />
          <Picker.Item label="Cookery" value="cookery" />
          <Picker.Item label="French Toast" value="french toast" />
          <Picker.Item label="Sneha" value="sneha" />

        </Picker>
        <Picker
          style={{ width: '80%', top: 200 }}
          selectedValue={this.state.Dish}
          onValueChange={(dish) => this.setState({ Dish: dish })}>
          <Picker.Item label="select dish" value="" />
          <Picker.Item label="Biriyani" value="biriyani" />
          <Picker.Item label="Chinese combo" value="chinese combo" />
          <Picker.Item label="Chapati" value="chapati" />
          <Picker.Item label="Chilly chicken" value="chilly chicken" />

        </Picker>

        <TouchableOpacity style={styles.soldout}
          onPress={this.soldout.bind(this)}
        >

          <Text style={styles.text}> SOLD OUT</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.back}
          onPress={this.goToVendor2.bind(this)}
        >
          <Image
            source={require('./back.png')}
          />



        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
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
    justifyContent: 'center',
    padding: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    top: 40,
    textDecorationLine: 'underline',
    color: 'rgb(243,156,18)',
},
soldout: {
    backgroundColor: 'rgb(30,132,70)',
    width: '80%',
    left: 50,
    right: 60,
    padding: 14,
    top: 300,
    marginTop: 10,
  },
  text3: {
    fontSize: 14,
    color: 'rgb(255,255,255)',
  },
  back: {
    backgroundColor: 'rgb(0,0,0)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '20%',


  }
});