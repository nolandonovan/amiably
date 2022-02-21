import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';

import { getDocs, collection } from "firebase/firestore";


export default function Contacts() {

  const [contacts, setContacts] = useState([])
  const [friends, setFriends] = useState([])


  useEffect(() => {
      async function getContacts(){
        const contactsSnapshot = await getDocs(collection(firestore,`users/${auth.currentUser.uid}/contacts`));
        const contactsArr = []
        contactsSnapshot.forEach((doc) => {
          contactsArr.push({ ...doc.data(), id: doc.id })
          //setContacts(currentContacts => [...currentContacts, contactData]);
        })
        setContacts(contactsArr)
        console.log("Get all contacts ran")
      }
      getContacts()
  },[])

  return (
    <div>
        <ul>
          {contacts.map(contact => <li>{contact.name}</li>)}
        </ul>
    </div>
  );
}