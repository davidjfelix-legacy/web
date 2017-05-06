import firebase from 'firebase'
import firebaseApp from './firebase'

const auth = firebaseApp.auth()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
  facebookProvider.addScope("email")
export const googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.addScope("email")
  googleProvider.addScope("profile")

export default auth
