import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA1cV67iwme85pE9_0DTwaGKAExcOfzSzU',
  authDomain: 'chico-todo.firebaseapp.com',
  projectId: 'chico-todo',
  storageBucket: 'chico-todo.appspot.com',
  messagingSenderId: '54381386495',
  appId: '1:54381386495:web:8191ece9015c4e203c8aca',
  measurementId: 'G-RXBNXGMDQ1'
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
