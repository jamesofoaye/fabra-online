import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: "AIzaSyDEjUgzRF-HZ_OT3F_HesR1RAcCxB8jQ0k",
//         authDomain: "fabra-online.firebaseapp.com",
//         databaseURL: "https://fabra-online-default-rtdb.firebaseio.com",
//         projectId: "fabra-online",
//         storageBucket: "fabra-online.appspot.com",
//         messagingSenderId: "573944782340",
//         appId: "1:573944782340:web:5db164299e0ae202d3df51",
//         measurementId: "G-3YB4T58ZS9"
//     });
// }

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase as default, projectStorage, projectFirestore, timestamp };
