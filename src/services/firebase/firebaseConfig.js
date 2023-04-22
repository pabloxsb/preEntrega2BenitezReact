
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7f9RQRpAjLOvnvl_aY83mrKxBe1g5GMQ",
  authDomain: "backenmalawi.firebaseapp.com",
  projectId: "backenmalawi",
  storageBucket: "backenmalawi.appspot.com",
  messagingSenderId: "187219799649",
  appId: "1:187219799649:web:4acc7573ee2b36be154420"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)