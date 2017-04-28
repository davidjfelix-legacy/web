import firebase from 'firebase'

import { FIREBASE_CONFIG } from '../configuration'

firebase.initializeApp(FIREBASE_CONFIG)
const database = firebase.database()

export default database