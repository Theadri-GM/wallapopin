import { initializeApp } from "firebase/app";                  // Import que nos da directamente firebase cuando vamos a añadir firebase a nuestro proyecto.
import { getAuth } from 'firebase/auth'                        // Import del getAuth que nos permite autenticar los usuario registrados o registrar nuevos usuarios o haceer un logout.
import { getFirestore } from '@firebase/firestore';   
import firebase from 'firebase/app'         // Import de getFirestore que nos va a permitir coger nuetro firestore y almacenar datos en él.
const firebaseConfig = {
    apiKey: "AIzaSyBEoJk2tvtulO7U4r3Ne191cODC6zqSmSM",
    authDomain: "proyectowallapop-53d86.firebaseapp.com",
    projectId: "proyectowallapop-53d86",
    storageBucket: "proyectowallapop-53d86.appspot.com",
    messagingSenderId: "987819980801",
    appId: "1:987819980801:web:4e1b1470e0c79589536800",
    measurementId: "G-JW25PF0C59"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);                          // Con esto hacemos un export en una constante llamada db en la que vamos a tener los datos necesarios para poder conectar on nuestra bbdd de firestore.

export const auth = getAuth(app);


