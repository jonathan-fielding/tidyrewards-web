import React from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAH8GRR--NeQBSjLAhT1Fwb3A6N5p9at7M',
  authDomain: 'tidyrewards-3d381.firebaseapp.com',
  projectId: 'tidyrewards-3d381',
  storageBucket: 'tidyrewards-3d381.appspot.com',
  messagingSenderId: '616990328349',
  appId: '1:616990328349:web:c7f9a77f5945aa7002a8f4',
  measurementId: 'G-7KNFSJ853T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
