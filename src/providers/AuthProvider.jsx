import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";



const auth = getAuth(app);
export const AuthContext= createContext(null);



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const googleSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
        
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }
   

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
            //console.log(loggedUser)

            return ()=>{
                unsubscribe();
            }

        })


    },[])
    
    const authInfo={
        user,
        createUser,
        signInUser,
        updateUser,
        resetPassword,
        googleSignin,
        githubSignin,
        signOutUser,
        loading,
        
    };
   
    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider></>
        
    );
};

export default AuthProvider;