// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { reqFirebaseConfig } from "../actions";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };



// Initialize Firebase
// const app = initializeApp(getFirebaseConfig());
// export const auth = getAuth(app);

export const useFirebaseAuth = () => {

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getConfig = async () => {
      let res = await reqFirebaseConfig();
      let app = initializeApp(res);
      setAuth(getAuth(app));
    };
    getConfig();
  }, []);
  
  return auth;
}

export const useFirestore = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const loadDb = async () => {
      let res = await reqFirebaseConfig();
      let app = initializeApp(res);
      let db = getFirestore(app);
      setDb(db);
    };
    loadDb();
  }, []);

  return db;
};
