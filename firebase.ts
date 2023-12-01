import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2R-YSmTEYQWLvMqOwSmdNGZ8ODhzlpls",
  authDomain: "dropbox-clone-a16f0.firebaseapp.com",
  projectId: "dropbox-clone-a16f0",
  storageBucket: "dropbox-clone-a16f0.appspot.com",
  messagingSenderId: "74421945791",
  appId: "1:74421945791:web:ddeabbe8a0b59c52e7cd0a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
