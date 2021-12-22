// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // creates the connection
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4QS2dEnA7G9pcxDESI_pgUBdeZnOsRio',
  authDomain: 'carp-ea756.firebaseapp.com',
  projectId: 'carp-ea756',
  storageBucket: 'carp-ea756.appspot.com',
  messagingSenderId: '310051836065',
  appId: '1:310051836065:web:a8eb21e8ecf540aea4a0e0'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
