// lib/firebase.tsx
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVTOJvMbwzjW8CGuAllWrzkiHzsuRM2P0",
    authDomain: "kreate-e3912.firebaseapp.com",
    projectId: "kreate-e3912",
    storageBucket: "kreate-e3912.firebasestorage.app",
    messagingSenderId: "950513580478",
    appId: "1:950513580478:web:f18304c2d2b82beb3e61ef",
    measurementId: "G-6BDDVDS0M1"
};

// Evita inicializar múltiples veces durante el Hot Reload en desarrollo
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);