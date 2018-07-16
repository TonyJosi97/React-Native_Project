import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import Vendor2 from './vendor/Vendor2';
import Soldout from './vendor/Soldout';


export default class ImageView extends Component {

	render() {
		return (

			<Router>

				<Scene key='root'>

					<Scene
						key='Vendor2'
						component={Vendor2}
						hideNavBar={true}
						initial={true}
					/>

					<Scene
						key='Soldout'
						component={Soldout}
						hideNavBar={true}
					/>

				</Scene>

			</Router>

		);
	}
}



const styles = StyleSheet.create({

	container: {
		flex: 1,
	},

});