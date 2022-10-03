import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC5fuoYOip0CYZCPMNHxLwyfEQN3xqU4A8",
  authDomain: "i-can-pull.firebaseapp.com",
  projectId: "i-can-pull",
  storageBucket: "i-can-pull.appspot.com",
  messagingSenderId: "1017302403601",
  appId: "1:1017302403601:web:3291c3c9d444e6daabbfb0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
