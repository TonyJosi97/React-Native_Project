import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import * as firebase from 'firebase';


import Signin from './src/Screens/Signin';
import Signup from './src/Screens/Signup';
import Foodview from './src/Screens/Foodview';
import FirebaseInit from './src/FirebaseInit';
import Vendorview from './src/Screens/Vendorview';
import VendorviewNavBar from './src/NavigationBars/VendorviewNavBar';
import Settings from './src/Screens/Settings';
import SettingsNavBar from './src/NavigationBars/SettingsNavBar';
import FoodviewNavBar from './src/NavigationBars/FoodviewNavBar';


import {
	MainNavBar,
} from 'react-native'



export default class ImageView extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (

			<Router>

				<Scene key='root'>

					<Scene
						key='Vendorview'
						component={Vendorview}
						navBar={VendorviewNavBar}
						initial={true}
					/>

					<Scene
						key='Foodview'
						component={Foodview}
						navBar={FoodviewNavBar}
					/>

					<Scene
						key='Settings'
						component={Settings}
						navBar={SettingsNavBar}
					/>
					
				</Scene>

			</Router>

		);
	}
}
