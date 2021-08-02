import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDw4c_jI9cELPQdNMMs_cJdx-8Ux1vXrog',
  authDomain: 'music-b968d.firebaseapp.com',
  projectId: 'music-b968d',
  storageBucket: 'music-b968d.appspot.com',
  messagingSenderId: '375444186487',
  appId: '1:375444186487:web:74ce0379171e71ff366d72',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth, db, storage, usersCollection, songsCollection, commentsCollection,
};
