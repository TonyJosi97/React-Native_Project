import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Alert,
	ToastAndroid,
	CheckBox,
} from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import firebase from 'firebase';


import Dimensions from 'Dimensions';


import GLOBALS from '../global/Globals';
import Background from '../Background.js';
import Logo from '../Logo.js';
import FirebaseInit from '../FirebaseInit';


export default class Signin extends Component {

	constructor(props) {
		super(props);
		if (!firebase.apps.length) {
			FirebaseInit.initialise();
		}
		this.state = {
			username: '',
			password: '',
			checked: true,
			response: 'Initial',
		}
	}


	async login() {

		var uname = this.state.username;
		uname = uname.trim();
		var pass = this.state.password;

		if (this.state.checked == true) {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
				.then(async () => {
					try {
						await firebase.auth().signInWithEmailAndPassword(uname, pass);
						this.setState({
							response: "Logged In"
						});
						if (!firebase.auth().currentUser.emailVerified) {
							Alert.alert(
								'Verify E-Mail',
								'Please verify your mail ID by clicking on the Link mailed to your ID!',
								[
									{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
								],
								{ cancelable: false }
							)
						}
					}
					catch (error) {
						this.setState({
							response: error.toString()
						})
					}

					try {
						var user = firebase.auth().currentUser;
						userID = user.uid;
						await firebase.database().ref('/users/' + userID).on('value', (snapshot) => {
							const userData = snapshot.val();
							var userType = userData.isVendor;
							ToastAndroid.show(userType.toString(), ToastAndroid.SHORT);
							if (userType.toString() == 'no') {
								Actions.Vendorview()
							}
							else{
								Actions.ScanAndMarkOutOfStock()
							}
						});
					}
					catch (error) {
						ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
					}
					ToastAndroid.show(this.state.response, ToastAndroid.SHORT);
				})
				.catch(function (error) {
					ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
				});
		}
		else {
			async () => {
				try {
					await firebase.auth().signInWithEmailAndPassword(uname, pass);
					this.setState({
						response: "Logged In"
					});
					if (!firebase.auth().currentUser.emailVerified) {
						Alert.alert(
							'Verify E-Mail',
							'Please verify your mail ID by clicking on the Link mailed to your ID!',
							[
								{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
							],
							{ cancelable: false }
						)
					}
					try {
						var user = firebase.auth().currentUser;
						userID = user.uid;
						await firebase.database().ref('/users/' + userID).on('value', (snapshot) => {
							const userData = snapshot.val();
							var userType = userData.isVendor;
							ToastAndroid.show(userType.toString(), ToastAndroid.SHORT);
						});
					}
					catch (error) {
						ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
					}
					Actions.Vendorview()
				}
				catch (error) {
					this.setState({
						response: error.toString()
					})
				}
				ToastAndroid.show(this.state.response, ToastAndroid.SHORT);
			}
		}
	}

	inputLoginData() {
		ToastAndroid.show('Hello ' + this.state.username, ToastAndroid.SHORT);
	}

	inputForgotPassword() {
		Actions.ForgotPassword()
	}

	newUserPage() {
		ToastAndroid.show('Check Mail!!', ToastAndroid.SHORT);
	}

	goToSignup() {
		Actions.Signup()
	}

	render() {
		return (

			<Background>

				<Logo />

				<View>


					<TextInput
						style={styles.textStyle}
						placeholder='Username'
						returnKeyType={'done'}
						onChangeText={(text) => this.setState({ username: text })}
					/>

					<TextInput
						style={styles.textStyle}
						placeholder='Password'
						secureTextEntry={true}
						returnKeyType={'done'}
						onChangeText={(text) => this.setState({ password: text })}
					/>

					<View style={{ flexDirection: 'row' }}>

						<CheckBox
							style={styles.checkBoxStyle}
							value={this.state.checked}
							onValueChange={() => this.setState({ checked: !this.state.checked })}
						/>

						<Text style={styles.checkBoxText}> Remember Me! </Text>

						<TouchableOpacity
							style={styles.forgotPs}
							onPress={this.inputForgotPassword.bind(this)}
						>
							<Text style={styles.forgotPsText}> Forgot Password? </Text>
						</TouchableOpacity>

					</View>

					<TouchableOpacity
						style={styles.btnStyle}
						onPress={this.login.bind(this)}
					>
						<Text style={styles.btnText}> LOGIN </Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.newUser}
						onPress={this.goToSignup.bind(this)}
					>
						<Text style={styles.newUserText}> Register Now </Text>
					</TouchableOpacity>

				</View>

			</Background>

		);
	}
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({

	container: {
		flex: 1,
	},

	btnText: {
		left: -5,
		top: 5,
		color: "white"
	},

	textStyle: {
		left: 20,
		paddingLeft: 8,
		width: DEVICE_WIDTH - 40,
		height: 55,
		color: GLOBALS.primaryTextColor,
		fontSize: 24,
	},

	forgotPs: {
		top: 8,
		left: 110,
	},

	checkBoxText: {
		top: 8,
		left: 15,
		color: GLOBALS.secondaryTextColor,
	},


	forgotPsText: {
		color: GLOBALS.linkTextColor,
	},

	btnStyle: {
		backgroundColor: GLOBALS.linkTextColor,
		alignItems: 'center',
		top: 35,
		left: DEVICE_WIDTH / 2 - ((DEVICE_WIDTH - 250) / 2),
		paddingLeft: 8,
		width: DEVICE_WIDTH - 250,
		height: 30,
	},

	checkBoxStyle: {
		left: 20,
	},

	newUser: {
		top: 60,
		alignItems: 'center',
	},

	newUserText: {
		color: GLOBALS.linkTextColor,

	},

});

