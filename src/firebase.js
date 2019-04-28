import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyB_kfYH-TIz8r-63qr6mHYgKwPyimeJs-g",
    authDomain: "m-city-f1c67.firebaseapp.com",
    databaseURL: "https://m-city-f1c67.firebaseio.com",
    projectId: "m-city-f1c67",
    storageBucket: "m-city-f1c67.appspot.com",
    messagingSenderId: "311528602373"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot)=>{
 console.log(snapshot.val())
})