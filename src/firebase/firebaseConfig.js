import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: "AIzaSyDCE8Y_ou3CKBSRkbXj_qIkOBX2tHBiBAY",
  authDomain: "msoko-seller.firebaseapp.com",
  projectId: "msoko-seller",
  storageBucket: "msoko-seller.appspot.com",
  messagingSenderId: "1050375667505",
  appId: "1:1050375667505:web:ada8849219c6d47d387a10",
  measurementId: "G-J8FH55NC39",
  databaseURL: "https://msoko-seller-default-rtdb.firebaseio.com", // Add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
