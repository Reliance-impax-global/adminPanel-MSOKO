// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCE8Y_ou3CKBSRkbXj_qIkOBX2tHBiBAY",
  authDomain: "msoko-seller.firebaseapp.com",
  databaseURL: "https://msoko-seller-default-rtdb.firebaseio.com",
  projectId: "msoko-seller",
  storageBucket: "msoko-seller.appspot.com",
  messagingSenderId: "1050375667505",
  appId: "1:1050375667505:web:ada8849219c6d47d387a10",
  measurementId: "G-J8FH55NC39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app 