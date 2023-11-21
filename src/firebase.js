import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDiEaHjYt6_e9c-qDELpTWqz_11GUagw2s",
  authDomain: "fir-61431.firebaseapp.com",
  projectId: "fir-61431",
  storageBucket: "fir-61431.appspot.com",
  messagingSenderId: "572149937424",
  appId: "1:572149937424:web:d4fcb73b983b8b2def6195"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}