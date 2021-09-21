import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCLXtVybfJy2kaNS8jM5P2bUqAobCkXwok",
    authDomain: "netflix-clone-94fea.firebaseapp.com",
    projectId: "netflix-clone-94fea",
    storageBucket: "netflix-clone-94fea.appspot.com",
    messagingSenderId: "796857379852",
    appId: "1:796857379852:web:fe40bbef0ac29a09035229",
    measurementId: "G-MP8CY7BV1S"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth()
  const storage = getStorage();
  
  export {auth, storage, createUserWithEmailAndPassword, signInWithEmailAndPassword};
  export default db;