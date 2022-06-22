import React, { useContext, useEffect, useState } from "react";
import { auth } from "../fire";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [succesRegistered, setSuccesRegistered] = useState(false);

  const handleSignup = (email, password) => {
    console.log("running");
    setEmailError("");
    auth.fetchSignInMethodsForEmail(email).then((signInMethods) => {
      if (signInMethods.length === 0) {
        auth.createUserWithEmailAndPassword(email, password);
        setSuccesRegistered(true);
        console.log("SUCCES");
      } else {
        setEmailError("Email already exists");
        console.log("EMAIL ALREADY EXIST");
      }
    });
  };

  const handleSignin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleSignout = () => {
    return auth.signOut();
  };

  const handleResetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    handleSignup,
    emailError,
    succesRegistered,
    handleSignin,
    handleSignout,
    handleResetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
