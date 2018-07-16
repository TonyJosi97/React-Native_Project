import React, { Component } from 'react'


import {  StyleSheet,
          Image,
       } from 'react-native'


export default class Logo extends Component {
    render() {
        return (

            <Image 
            style = {styles.logo}
            source={require('../image/logo.png')}
            resizeMode="contain"
              />
            
            );
        }
    }

    const styles = StyleSheet.create({

        logo: {
            marginTop: 95,
            alignSelf: 'center',
            height: '30%',
            width: '56%'
          },

    });
