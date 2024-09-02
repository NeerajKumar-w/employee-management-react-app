import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';

const firebaseConfig = {

  apiKey: "AIzaSyBr39p0Pk6x3HQWGdZn9_jSezXV3REgqTY",

  authDomain: "employee-43f79.firebaseapp.com",

  databaseURL: "https://employee-43f79-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "employee-43f79",

  storageBucket: "employee-43f79.appspot.com",

  messagingSenderId: "753895841346",

  appId: "1:753895841346:web:98ee5c3e9e9ebb45d417db"

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database, ref, onValue, set, push};


