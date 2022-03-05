import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import toast from 'react-hot-toast';
import { useEffect, useState, useCallback, useContext } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { auth, firestore } from '../lib/firebase';
import InitialLogo from "./logo";

export default function List() {
 
  const [contacts, setContacts] = useState([])
  
  

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
    },[] //empty array so the useEffect only runs on componentDidMount()
  )

if (contacts.length > 0) {
  let mappingContacts = contacts.map(function(contact) {
    return (
      <a href={'/contacts/'+contact.id}>
        <div className={StyleSheet.boxList}>
        {/* <img src={'/IMAGES/SHbrunet1.png'} className={StyleSheet.avatar}/> */}

        <InitialLogo userObj={contact} />
       
        <div>
        <p className={StyleSheet.avatarName}>
            {contact.name} </p>
            <span>Birthday</span>
        </div>
        </div>
      </a>
      ); // return end
  }) // function end
 return mappingContacts;
} else {
    return (
      <div className={StyleSheet.datatableList}> 
      <a className={StyleSheet.buttonCreate}   onClick={() => {window.location.href = '/create';}} >
      Make Your First Contact!
      </a>
      </div> 
    );
}; // end of else
    
} // end of ListComponent
 
