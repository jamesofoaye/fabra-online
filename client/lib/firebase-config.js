import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
}
<<<<<<< HEAD:client/lib/firebase-config.js
=======

>>>>>>> e21045ffd686adb83c446bb3c775599071c0491e:lib/firebase-config.js
export default firebase;