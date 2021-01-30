import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBKLEBhZMvdXsxFlZuwdqSW3zRcrmpFpg",
  authDomain: "contactreact-80b34.firebaseapp.com",
  projectId: "contactreact-80b34",
  storageBucket: "contactreact-80b34.appspot.com",
  messagingSenderId: "545770606088",
  appId: "1:545770606088:web:24130aa87c9f5d58ab8bbd"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;