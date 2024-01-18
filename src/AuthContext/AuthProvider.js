import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebaseConfig'

const auth = getAuth(app)

export const UserAuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const SignUp = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userGoogleLogin = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }
  // const updateUserProfile = (profile) => {
  //   setLoader(true)
  //   return updateProfile(auth.currentUser, profile)
  // }
  const updateUserProfile =(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,photoURL:photo
    })
  }
  const userLogout = () => {
    setLoader(false)
    localStorage.removeItem('token')
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const AuthInfo = {
    loader,
    user,
    setLoader,
    SignUp,
    userLogin,
    userLogout,
    userGoogleLogin,
    updateUserProfile,
  }

  return (
    <UserAuthContext.Provider value={AuthInfo}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default AuthProvider
