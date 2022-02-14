import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';

import { getDocs, collection } from "firebase/firestore";


export default function Contacts() {

  const [contacts, setContacts] = useState([])
  

  //* ORIGINAL *//
  useEffect(() => {
    async function getContacts(){
      const contactsSnapshot = await getDocs(collection(firestore,`users/${auth.currentUser.uid}/contacts`));
      const contactsArr = []
      contactsSnapshot.forEach((doc) => {
        contactsArr.push({ ...doc.data(), id: doc.id })
        //setContacts(currentContacts => [...currentContacts, contactData]);
      })
      setContacts(contactsArr)
    }
    getContacts()
  })


  // async function test(){
  //   console.log("test function ran")
  //   console.log("id: "+ auth.currentUser.uid)
  //   const contactsSnapshot = await getDocs(collection(firestore,`users/${auth.currentUser.uid}/contacts`));
  //   contactsSnapshot.forEach((doc) => {
  //     console.log(doc.data())
  //     console.log("I ran, data for doc")
  //     }
  //   )
  // }
  // test()

  return (
    <div>
        <ul>
          {contacts.map(contact => <li>{contact.name}</li>)}
        </ul>
    </div>
  );
}