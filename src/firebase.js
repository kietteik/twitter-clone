import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHWA2K-kwgV1P0BEleUtV0usx444DSi2k",
    authDomain: "twitter-clone-106d4.firebaseapp.com",
    databaseURL: "https://twitter-clone-106d4.firebaseio.com",
    projectId: "twitter-clone-106d4",
    storageBucket: "twitter-clone-106d4.appspot.com",
    messagingSenderId: "493688103076",
    appId: "1:493688103076:web:76a110506fbacd5f2d4631",
    measurementId: "G-28GR96Q19L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
