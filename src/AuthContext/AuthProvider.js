// import React, { createContext, useEffect, useState } from 'react'
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   signInWithPopup,
//   updateProfile,
// } from 'firebase/auth'
// import app from '../firebase/firebaseConfig'

// const auth = getAuth(app)

// export const UserAuthContext = createContext()
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loader, setLoader] = useState(true)

//   const SignUp = (email, password) => {
//     setLoader(true)
//     return createUserWithEmailAndPassword(auth, email, password)
//   }
//   const userLogin = (email, password) => {
//     setLoader(true)
//     return signInWithEmailAndPassword(auth, email, password)
//   }
//   const userGoogleLogin = (provider) => {
//     setLoader(true)
//     return signInWithPopup(auth, provider)
//   }
//   // const updateUserProfile = (profile) => {
//   //   setLoader(true)
//   //   return updateProfile(auth.currentUser, profile)
//   // }
//   const updateUserProfile =(user,name,photo)=>{
//     setLoader(true)
//     updateProfile(user,{
//       displayName:name,photoURL:photo
//     })
//   }
//   const userLogout = () => {
//     setLoader(false)
//     localStorage.removeItem('token')
//     return signOut(auth)
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)

//       setLoader(false)
//     })
//     return () => {
//       unsubscribe()
//     }
//   }, [])

//   const AuthInfo = {
//     loader,
//     user,
//     setLoader,
//     SignUp,
//     userLogin,
//     userLogout,
//     userGoogleLogin,
//     updateUserProfile,
//   }

//   return (
//     <UserAuthContext.Provider value={AuthInfo}>
//       {children}
//     </UserAuthContext.Provider>
//   )
// }

// export default AuthProvider
// AuthProvider.js
// AuthProvider.js

import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import app from '../firebase/firebaseConfig';

const auth = getAuth(app);

export const UserAuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const updateUserDatabase = (user) => {
    const db = getDatabase(app);
    const usersRef = ref(db, 'users/' + user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
    };

    set(usersRef, userData)
      .then(() => {
        console.log('User data sent to Realtime Database successfully');
      })
      .catch((error) => {
        console.error('Error updating Realtime Database:', error);
      });
  };

  const SignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserDatabase(user);
        return userCredential; 
      })
      .catch((error) => {
        setLoader(false);
        console.error('Error signing up:', error);
        throw error;
      });
  };

// ...

const userLogin = (email, password) => {
  setLoader(true);
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      try {
        const additionalUserInfo = await getAdditionalUserInfo(userCredential);
        const userWithAdditionalData = {
          ...user,
          displayName: additionalUserInfo?.profile?.name || user.displayName,
        };
        updateUserDatabase(userWithAdditionalData);
        return userCredential;
      } catch (error) {
        console.error('Error fetching additional user data:', error);
        updateUserDatabase(user);
        return userCredential;
      }
    })
    .catch((error) => {
      setLoader(false);
      console.error('Error logging in:', error);
      throw error;
    });
};

// ...


// ...


  const userGoogleLogin = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (user, name, photo, role) => {
    setLoader(true);
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        const db = getDatabase(app);
        const usersRef = ref(db, 'users/' + user.uid);
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: name || user.displayName || '',
          photoURL: photo || user.photoURL || '',
          role: role || '',
        };

        set(usersRef, userData)
          .then(() => {
            console.log('User data sent to Realtime Database successfully');
          })
          .catch((error) => {
            console.error('Error updating Realtime Database:', error);
          });
      })
      .catch((error) => {
        setLoader(false);
        console.error('Error updating profile:', error);
      });
  };

  const userLogout = () => {
    setLoader(false);
    localStorage.removeItem('token');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);

      if (currentUser) {
        updateUserDatabase(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setLoader, updateUserDatabase]);

  const AuthInfo = {
    loader,
    user,
    setLoader,
    SignUp,
    userLogin,
    userLogout,
    userGoogleLogin,
    updateUserProfile,
  };

  return (
    <UserAuthContext.Provider value={AuthInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthProvider;
