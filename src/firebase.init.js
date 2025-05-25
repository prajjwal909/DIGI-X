// src/firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-rQn9S3z0-_uo_vnmJJE-dvFsOqlaV5U",
  authDomain: "creative-agency-c77e8.firebaseapp.com",
  databaseURL: "https://creative-agency-c77e8-default-rtdb.firebaseio.com",
  projectId: "creative-agency-c77e8",
  storageBucket: "creative-agency-c77e8.appspot.com",
  messagingSenderId: "304794464558",
  appId: "1:304794464558:web:976c86ab7102d5f97a4abf",
  measurementId: "G-FDLFNQJ0NH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
