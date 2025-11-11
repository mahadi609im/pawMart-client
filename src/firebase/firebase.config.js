// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCr19L1z9qIA3i6uDPAaC2BcUHFjK7ARPY',
  authDomain: 'powmart-69e38.firebaseapp.com',
  projectId: 'powmart-69e38',
  storageBucket: 'powmart-69e38.firebasestorage.app',
  messagingSenderId: '339099022483',
  appId: '1:339099022483:web:e7f37d3b0d8225feaf8966',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
