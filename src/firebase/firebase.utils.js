import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCrHCr1TViaD3NTeOVNxYYhp9Ip7YVqhR8",
  authDomain: "ifurniture-online.firebaseapp.com",
  databaseURL: "https://ifurniture-online.firebaseio.com",
  projectId: "ifurniture-online",
  storageBucket: "ifurniture-online.appspot.com",
  messagingSenderId: "897237357052",
  appId: "1:897237357052:web:d920780dd3747b68cf2279",
  measurementId: "G-HXPRNP70W5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;