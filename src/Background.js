import React, { Component } from 'react'

import {  StyleSheet,
          ImageBackground, 
          View,
       } from 'react-native'


export default class Background extends Component {
    render() {
        return (

            <View style = {styles.bgContainer}>

                <ImageBackground 
                style = {styles.background}
                source = {require('../image/bg.png')}  
                resizeMode="contain"
                    >

                    {this.props.children}

                </ImageBackground>

            </View>
    
            );
        }
    }

    const styles = StyleSheet.create({
        bgContainer: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
    
      },
    
      background: {
        height: '100%',
        width: '100%',
      },
    });
