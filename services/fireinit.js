import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: 'AIzaSyBtg8nFf65H31P2M0iRtyiZudxVlFEtoUM',
    authDomain: 'assets-mngt.firebaseapp.com',
    databaseURL: 'https://assets-mngt.firebaseio.com',
    projectId: 'assets-mngt',
    storageBucket: 'assets-mngt.appspot.com',
    messagingSenderId: '98375434890'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase