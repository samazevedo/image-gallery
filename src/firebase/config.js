import firebase from 'firebase/compat/app'
//import { serverTimestamp } from 'firebase/compat/firestore'
import 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/serverTimestamp'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBDqTqBhTPgQDTUJzrMBsI7KB49Wxdv13U',
    authDomain: 'img-gallery-571b0.firebaseapp.com',
    projectId: 'img-gallery-571b0',
    storageBucket: 'img-gallery-571b0.appspot.com',
    messagingSenderId: '204994261947',
    appId: '1:204994261947:web:830c7086d306e8028fca9e',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// update the timestamp field with the value form the server

// firebase for auth and db
export const galleryStorage = firebaseApp.storage()
export const galleryFirestore = firebaseApp.firestore()
//export const timestamp = firebase.firestore.FieldValue.serverTimestamp
export const timestamp;