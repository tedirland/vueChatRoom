import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDeuaUZmIdhSTdqIvc9rhqGen41D9C9mu8',
  authDomain: 'dojo-blog-86ab1.firebaseapp.com',
  projectId: 'dojo-blog-86ab1',
  storageBucket: 'dojo-blog-86ab1.appspot.com',
  messagingSenderId: '823471080492',
  appId: '1:823471080492:web:aaeecfedb45691031afd89',
};

//init firebase

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
