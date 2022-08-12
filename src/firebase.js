import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByen-cZI2fUv5jY2Lh2k_C5SfVI0wo9Es",
    authDomain: "myfristproyect-91211.firebaseapp.com",
    projectId: "myfristproyect-91211",
    storageBucket: "myfristproyect-91211.appspot.com",
    messagingSenderId: "674700031323",
    appId: "1:674700031323:web:ba5b0b792335caedcd167e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}