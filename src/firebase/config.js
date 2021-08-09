import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA3NFI6LEMJKgd3aKY6racZSKC3D6APnGM",
    authDomain: "blog-4u.firebaseapp.com",
    projectId: "blog-4u",
    storageBucket: "blog-4u.appspot.com",
    messagingSenderId: "231618773896",
    appId: "1:231618773896:web:95493c595a0b28924b703d"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp


  export {projectFirestore,projectAuth,timestamp,projectStorage}