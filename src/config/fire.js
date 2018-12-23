import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAYQsqcF9Q1VSBXJJZF9uMJDXBSG4RxFfg",
    authDomain: "tracker-296c5.firebaseapp.com",
    databaseURL: "https://tracker-296c5.firebaseio.com",
    projectId: "tracker-296c5",
    storageBucket: "tracker-296c5.appspot.com",
    messagingSenderId: "370122065114"
  };
const fire = firebase.initializeApp(config);
export default fire;
