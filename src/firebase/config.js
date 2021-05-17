import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIglRYx1TFXGJdlCEVA4rf_hmnoPHZuqQ",
    authDomain: "live-chat-ebe9b.firebaseapp.com",
    projectId: "live-chat-ebe9b",
    storageBucket: "live-chat-ebe9b.appspot.com",
    messagingSenderId: "565104136317",
    appId: "1:565104136317:web:436c573f618b4a9982e114",
    measurementId: "G-T7NFZTT5Q4",
};
// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
