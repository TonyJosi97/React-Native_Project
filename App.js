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
import ForgotPassword from './src/Screens/ForgotPassword';
import OrderConfirmed from './src/Screens/OrderConfirmed';
import ScanAndMarkOutOfStock from './src/VendorApp/ScanAndMarkOutOfStock';
import ScanAndMarkOutOfStockNavBar from './src/NavigationBars/ScanAndMarkOutOfStockNavBar';


export default class ImageView extends Component {

	constructor(props) {
		super(props);

		if (!firebase.apps.length) {
			FirebaseInit.initialise();
		}

		this.state = {
			logged: false,
		}
	}

	getInitialView() {

		firebase.auth().onAuthStateChanged((user) => {

			let logState = user ? true : false;

			this.setState({
				logged: logState
			})
		});


	}

	render() {
		return (

			<Router>

				<Scene key='root'>

					<Scene
						key='Signin'
						component={Signin}
						hideNavBar={true}
						initial={!this.state.logged}
					/>

					<Scene
						key='Signup'
						component={Signup}
						hideNavBar={true}
					/>

					<Scene
						key='ForgotPassword'
						component={ForgotPassword}
						hideNavBar={true}
					/>

					<Scene
						key='Vendorview'
						component={Vendorview}
						navBar={VendorviewNavBar}
						initial={this.state.logged}
					/>

					<Scene
						key='OrderConfirmed'
						component={OrderConfirmed}
						navBar={FoodviewNavBar}
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

					<Scene
						key='ScanAndMarkOutOfStock'
						component={ScanAndMarkOutOfStock}
						navBar={ScanAndMarkOutOfStockNavBar}
					/>

				</Scene>

			</Router>

		);
	}
}
