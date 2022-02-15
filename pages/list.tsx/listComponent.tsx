import React from "react";
import StyleSheet from '../../styles/styleSheet.module.css'
import toast from 'react-hot-toast';
import { UserContext } from "../../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import Contacts from "../../lib/contacts";
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

export const ListComponent = () => {

    const user = useContext(UserContext);
    console.log(Contacts);

    let contacts = [{"name": "Zoe","date":"1/2/22"},{"name": "Noly"}];

if (contacts.length > 0) {
let mappingContacts = contacts.map(function(contact) {
    return (
    <div className={StyleSheet.boxList}>
    <img src={'/IMAGES/ZoeFace.jpg'} className={StyleSheet.avatar}/>
    <div>
    <p className={StyleSheet.avatarName}>
        {contact.name} </p>
        <span>July, 23rd, 1997</span>
    </div>
    </div>
    ); // return end
 }) // function end
 return mappingContacts;
} else {
    return (
    <div className={StyleSheet.datatableList}> 
    <a className={StyleSheet.buttonCreate}   onClick={() => {
    window.location.href = '/createNew';
  }} >
    Make Your First Contact!
    </a>
    </div> );
}; // end of else
    
} // end of ListComponent
 
