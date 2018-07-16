import * as firebase from "firebase";

export default class FirebaseInit {

    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCVKt70FBBBwW6YWp4q2tTflMC6ZImTDA0",
            authDomain: "foodhubweb.firebaseapp.com",
            databaseURL: "https://foodhubweb.firebaseio.com",
            projectId: "foodhubweb",
            storageBucket: "foodhubweb.appspot.com",
            messagingSenderId: "239285391754"
        });
    }

}
