import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useEffect, useState, useCallback, useContext } from 'react';
import SignIn from '../components/SignIn';


export default function Settings(props) {
  const { user } = useContext(UserContext);

  return (
    <main>
      {user ? <SignOutButton/> : <SignIn/>}
    </main>
  );
}

// Sign out button
function SignOutButton() {
  return (
  <>
    <h1>Settings</h1>
    <button onClick={() => auth.signOut()}>Sign Out</button>
  </>
  )
}

