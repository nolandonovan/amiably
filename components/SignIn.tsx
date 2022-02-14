import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useEffect, useState, useCallback, useContext } from 'react';


// Sign in with Google button
export default function SignIn() {
  
    const signInWithGoogle = async () => {
      await auth.signInWithPopup(googleAuthProvider)
        .then((result) => {
          updateUserDoc(result.user)
          toast.success("You're logged in!")
        }).catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("There was a error")
          console.log(errorMessage)
          });
      }
  
  
    return (
      <>
      <h1>Sign In to Continue</h1>
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src={'/google-logo.svg'} height="25px" width="25px"/> Sign in with Google
      </button>
      </>
    );
  };
  
  async function updateUserDoc(user){
    // console.log(user)
    const userDocRef = firestore.doc(`users/${user.uid}`);
    await userDocRef.set({ displayName: user.displayName, photoURL: user.photoURL },{merge: true});  
  };