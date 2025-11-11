import React, { createContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

// Context তৈরি
const AuthContext = createContext('');

const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Register (Sign Up)
  const registerAuthCreate = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setIsLoading(false)
    );
  };

  // Sign In (Email & Password)
  const signInAuthUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setIsLoading(false)
    );
  };

  // Update Profile
  const updateUserProfile = userUpdateInfo => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, userUpdateInfo).finally(() =>
      setIsLoading(false)
    );
  };

  // Google Login
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider).finally(() => setIsLoading(false));
  };

  // Sign Out
  const signOutAuthUser = () => {
    setIsLoading(true);
    return signOut(auth).finally(() => setIsLoading(false));
  };

  // Listen for Auth State Change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setIsLoading(false); // Auth state load হয়ে গেলে false
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    registerAuthCreate,
    signInAuthUser,
    user,
    setUser,
    updateUserProfile,
    signOutAuthUser,
    googleLogin,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
export { AuthContext };
