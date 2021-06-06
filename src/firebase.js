import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDTcPwJCh4LltkTnIQIwswMKOmTwc3YJu4",
	authDomain: "moveasy-cca60.firebaseapp.com",
	projectId: "moveasy-cca60",
	storageBucket: "moveasy-cca60.appspot.com",
	messagingSenderId: "255789179852",
	appId: "1:255789179852:web:c3f504851357384f543369",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// var fireDb = firebase.initializeApp(firebaseConfig);

const databasefb = firebaseApp.database().ref();
const db = firebase.firestore();
const auth = firebase.auth();

export { databasefb };

export { auth };
export default db;
export { firebaseApp };
