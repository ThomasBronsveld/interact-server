
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDd0KIXX6otfd40nU7IX0tt1uqTyqftF_s",
    authDomain: "interact-app-c67cb.firebaseapp.com",
    projectId: "interact-app-c67cb",
    storageBucket: "interact-app-c67cb.appspot.com",
    messagingSenderId: "850509648185",
    appId: "1:850509648185:web:84fc564308310d4ce518e8",
    measurementId: "G-VX26WMGDS2"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;
  //   const analytics = getAnalytics(app);
