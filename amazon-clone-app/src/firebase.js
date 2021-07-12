import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDYHNdxQoTWQyBCaqqjNQvFAWhooGAaXaA",
  authDomain: "clone-e7886.firebaseapp.com",
  projectId: "clone-e7886",
  storageBucket: "clone-e7886.appspot.com",
  messagingSenderId: "571839438888",
  appId: "1:571839438888:web:3915e96a1b3816b37a951d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}