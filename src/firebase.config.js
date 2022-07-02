import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIxGk6abIqJzfqgXtt67BzCS27J1Cjcuk',
  authDomain: 'house-market-place-2849e.firebaseapp.com',
  projectId: 'house-market-place-2849e',
  storageBucket: 'house-market-place-2849e.appspot.com',
  messagingSenderId: '299308262609',
  appId: '1:299308262609:web:0c9c80f4181e8952a811f0',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
