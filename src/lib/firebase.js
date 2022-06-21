import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJos-iWY1KjZdLmgv_4D-NgTY-3xQif8Y",
  authDomain: "fir-project-a51c7.firebaseapp.com",
  projectId: "fir-project-a51c7",
  storageBucket: "fir-project-a51c7.appspot.com",
  messagingSenderId: "472885716035",
  appId: "1:472885716035:web:c2dd2e70553f9f771ea0f6"
};

firebase.initializeApp(firebaseConfig);