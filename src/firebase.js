// import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDvPp8nIXTU2FjmqlDhTq0RoCUVMFbf5vo",
    authDomain: "linkedin-clone-sa-8d2fb.firebaseapp.com",
    projectId: "linkedin-clone-sa-8d2fb",
    storageBucket: "linkedin-clone-sa-8d2fb.appspot.com",
    messagingSenderId: "91024887448",
    appId: "1:91024887448:web:01f43f4bb6a3cea2728aed"
};

//this  special line of code  here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig)

//gets the firestore database
const db = firebaseApp.firestore();

// const auth = firebase.auth();
{ db }