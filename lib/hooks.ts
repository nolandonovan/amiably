import { auth, firestore } from './firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      // unsubscribe = ref.onSnapshot((doc) => {
      //   //setFirstName(doc.data()?.firstName);
      // });
    }

    return unsubscribe;
  }, [user]);

  return { user };
}