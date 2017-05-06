import firebase from 'firebase'

import { FIREBASE_CONFIG } from './configuration'

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

export default firebaseApp