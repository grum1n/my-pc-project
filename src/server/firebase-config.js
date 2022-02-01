import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDwGE2hGEAmIQUiACER3Jy5UHNXHydfeeI',
  authDomain: 'carp-656de.firebaseapp.com',
  projectId: 'carp-656de',
  storageBucket: 'carp-656de.appspot.com',
  messagingSenderId: '185414564622',
  appId: '1:185414564622:web:1abb58b48d92299590355f',
  databaseURL: "https://carp-656de-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const fireDB = getDatabase();
export const storage = getStorage(app);


