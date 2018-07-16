import {
    View, Image, StatusBar, TouchableOpacity, Text
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

export default class NavBar extends Component {
    
    showSettings() {
        Actions.Settings()
    }

    render() {
        return (
            <View style={styles.backgroundStyle}>
                <StatusBar />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => Actions.Vendorview()}>
                        <Image
                            source={require('../../image/back-arrow.png')}
                            style={styles.backarrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle} >Vendors</Text>

                    <TouchableOpacity style={styles.searchButtonStyle} > 
                        <Image
                            source={require('../../image/search.png')}
                            style={styles.searchStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.settingButtonStyle} onPress={this.showSettings.bind(this)}> 
                        <Image
                            source={require('../../image/settings.png')}
                            style={styles.settingStyle} />
                    </TouchableOpacity>
                </View >
            </View >
        );
    }

}
const styles = {
    backgroundStyle: {
        backgroundColor: 'transparent'
    },
    backarrowStyle: {
        resizeMode: 'contain',
        flexDirection: 'row',
        width: 45,
        height: 45,
        left: 0,
        justifyContent: 'flex-start'
    },
    textStyle: {
        left: 20,
        top: 8,
        fontSize: 28,
    },
    searchButtonStyle: {
        left: 120
    },
    searchStyle: {
        resizeMode: 'contain',
        width: 30,
        top: 11,
        height: 30,
    },
    settingStyle: {
        resizeMode: 'contain',
        width: 45,
        top: 2,
        height: 45,
    },
    settingButtonStyle: {
        left: 140
    }
};
