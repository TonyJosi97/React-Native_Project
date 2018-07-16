import {
    View, Image, StatusBar, TouchableOpacity, Text
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

class SettingsNavBar extends Component {

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
                    <Text style={styles.textStyle} >Settings</Text>
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
    settingStyle: {
        resizeMode: 'contain',
        width: 45,
        top: 2,
        height: 45,
        Padding: 200
    },
    settingButtonStyle: {
        left: 170
    }
};


export default SettingsNavBar;