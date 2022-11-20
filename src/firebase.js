// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD3-gkx8re1QxgxIRPKSAW8Ci5Vd3PCe34',
    authDomain: 'fb-bdreact01-9af99.firebaseapp.com',
    projectId: 'fb-bdreact01-9af99',
    storageBucket: "fb-bdreact01-9af99.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;