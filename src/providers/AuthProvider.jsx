/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.init";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleProvider = new GoogleAuthProvider()
    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    //logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    //unSubscribe
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        })
        return () =>{
            unSubscribe()
        }
    },[])




    const authInfo ={
        createUser,
        logIn,
        logInWithGoogle,
        loading,
        user,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;