"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { useFirebaseAuth } from "./firebase";
import SignIn from "../components/sign-in";
import { PROVIDER } from "./enums";
 
const AuthContext = createContext();

 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = useFirebaseAuth();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignIn = (provider) => {
    if(provider === PROVIDER.GOOGLE){
      return googleSignIn();
    }
    if(provider === PROVIDER.GITHUB){
      return gitHubSignIn();
    }
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user, auth]);
 
  return (
    <AuthContext.Provider value={{ user, firebaseSignIn, firebaseSignOut }}>
      {user ? children : <SignIn />}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};