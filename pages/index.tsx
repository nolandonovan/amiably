import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import toast from 'react-hot-toast';
import { useEffect, useState, useCallback, useContext } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { auth, firestore } from '../lib/firebase';
import InitialLogo from "../components/contactLogo";
import Navbar from "../components/navbar";

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

function FloatButton() {
  if (contacts.length > 0) {
 return (
  <a className={StyleSheet.buttonCreateFloat}   onClick={() => {window.location.href = '/create';}} >
  <img src="/plus.svg" alt="plus" />
  </a>
 ) 
}
return null
}
function ListAllContacts() {

   if (contacts.length > 0) {
  let mappingContacts = contacts.map(function(contact) {
    return (
      <div >
        
        <a classname={StyleSheet.noUnderline} href={'/contacts/'+contact.id}>
          <div className={StyleSheet.boxList}>
          <InitialLogo contact={contact} />
          <h2 className={StyleSheet.avatarName}>
              {contact.name} 
              <br /><h5>{contact.phone}</h5></h2>
              
        
          </div>
        </a>
      </div>
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
    )
} // end of else
};

return (
      <>
      <Navbar />
        <div className={StyleSheet.content}>
        <ListAllContacts />
        <FloatButton />
        </div>
      </>
);
} // end of ListComponent
 
