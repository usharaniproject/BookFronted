import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth"
import {  onAuthStateChanged } from "firebase/auth";
export  const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);


    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider)
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
  const logout =() =>{
    return signOut(auth)
  }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser =>{
           // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        login,
        logout
    }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
