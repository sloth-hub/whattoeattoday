import * as firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyAMvNCuoh3ipygWxjczfMWDIWwvfvvL-2g",
    authDomain: "whattoeattoday-5c793.firebaseapp.com",
    databaseURL: "https://whattoeattoday-5c793.firebaseio.com",
    projectId: "whattoeattoday-5c793",
    storageBucket: "whattoeattoday-5c793.appspot.com",
    messagingSenderId: "837219318834",
    appId: "1:837219318834:web:93dae4136cb2de9272902b",
    measurementId: "G-QFP73VCNRK"
};

export const fire = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    getFireDB(database);
}

export const getFireDB = (database) => {
    return database.ref("/").once("value");
}