// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // creates the connection
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwGE2hGEAmIQUiACER3Jy5UHNXHydfeeI',
  authDomain: 'carp-656de.firebaseapp.com',
  projectId: 'carp-656de',
  storageBucket: 'carp-656de.appspot.com',
  messagingSenderId: '185414564622',
  appId: '1:185414564622:web:1abb58b48d92299590355f'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
