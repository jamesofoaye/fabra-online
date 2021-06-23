import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDEjUgzRF-HZ_OT3F_HesR1RAcCxB8jQ0k",
        authDomain: "fabra-online.firebaseapp.com",
        databaseURL: "https://fabra-online-default-rtdb.firebaseio.com",
        projectId: "fabra-online",
        storageBucket: "fabra-online.appspot.com",
        messagingSenderId: "573944782340",
        appId: "1:573944782340:web:5db164299e0ae202d3df51",
        measurementId: "G-3YB4T58ZS9"
    });
}
export default firebase;