import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { Provider } from "react-redux";

// Firebase config object
/////////////////////////////////////
const App = {
  apiKey: "AIzaSyCY1LevgeCg5C8RRAhmw4wFMnaDTY8SQYk",
  authDomain: "unsplash-clone-2f9f4.firebaseapp.com",
  databaseURL: "https://unsplash-clone-2f9f4-default-rtdb.firebaseio.com",
  projectId: "unsplash-clone-2f9f4",
  storageBucket: "unsplash-clone-2f9f4.appspot.com",
  messagingSenderId: "14226727256",
  appId: "1:14226727256:web:e1656f05f7adc58472c52d",
};

// create user profile into the firestore database
///////////////////////////////////////////////////////

export const CreateUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const EntryDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        EntryDate,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

// Initialize App
//////////////////////////////////////
firebase.initializeApp(App);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// sing in with google
/////////////////////////////////////////
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
