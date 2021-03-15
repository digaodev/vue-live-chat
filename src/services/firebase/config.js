import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyA5dHulXWl1Wj6ZETK9mOGfi3OhJRsZ_BM',
    authDomain: 'vue3-live-chat.firebaseapp.com',
    projectId: 'vue3-live-chat',
    storageBucket: 'vue3-live-chat.appspot.com',
    messagingSenderId: '914807604518',
    appId: '1:914807604518:web:ba8a33325d60faa4066de7',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp }