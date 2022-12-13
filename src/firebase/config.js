import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACAI5_HfIZgIITRcVaBTDN7d9f5jy6UCs",
    authDomain: "texnomart-b4ab3.firebaseapp.com",
    projectId: "texnomart-b4ab3",
    storageBucket: "texnomart-b4ab3.appspot.com",
    messagingSenderId: "526109428609",
    appId: "1:526109428609:web:db0630569744892585f680",
    measurementId: "G-6JXB2Z8H4R"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth();

export { auth, backend }