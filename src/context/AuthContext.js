import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup} from "firebase/auth";
import {auth} from '../firebase'


const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({}); // new user

    //for email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // for email signin
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for google signin-signup
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    // for logout
    const logout = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{googleSignIn, user, createUser, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}