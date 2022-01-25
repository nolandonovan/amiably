import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useEffect, useState, useCallback, useContext } from 'react';



export default function Settings(props) {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>Settings</h1>
      <h2>Log out</h2>
      {user ? <SignOutButton /> : <SignInButton />}
    </main>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}


// Sign in with Google button
function SignInButton() {
  
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
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google-logo.svg'} height="25px" width="25px"/> Sign in with Google
    </button>
  );
};

async function updateUserDoc(user){
  // console.log(user)
  const userDocRef = firestore.doc(`users/${user.uid}`);
  await userDocRef.set({ displayName: user.displayName, photoURL: user.photoURL },{merge: true});  
};


/*

doc reference -> doc(user.uid)
get doc -
.exists();
(or .get()?)
if no doc exists 

*/