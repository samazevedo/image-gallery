import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

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
firebase.initializeApp(firebaseConfig)

const galleryStorage = firebase.storage()
const galleryFirestore = firebase.firestore()

export { galleryStorage, galleryFirestore }
