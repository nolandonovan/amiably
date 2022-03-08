import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';
import Navbar from "../components/navbar";

export default function CreateContact() {

    const { user } = useContext(UserContext);

    return (
        <>
         <Navbar />
            <main className={StyleSheet.content}>
                
                <CreateContactForm/>
            </main>
        </>
    )
}

function CreateContactForm(){
    
    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();
    
        const userDoc = firestore.doc(`users/${user.uid}`);
        
        const contactData = {
            name: name,
            phone: phone
        }
        await userDoc.collection("contacts").add(contactData);
        toast.success("Contact Created!")
      };

      
    return(
        <section>
            <form onSubmit={onSubmit}>
            <table className={StyleSheet.formTable}>
            <br /><h1><strong>create new contact</strong></h1>
            <br/><label>name:  
                <input name="name" placeholder="Jainet Smith" onChange={e => setName(e.target.value)} /><br/>
                <br/></label>
            <label>phone:  
                <input name="phone" placeholder="716-776-2323" onChange={e => setPhone(e.target.value)} /><br/>
                <br/></label>
            {/* <label>birthday:  
                <input name="Birthday" placeholder="mm/dd/yyyy" /><br/>
            </label> */}
            <div>
            <br/><button type="submit" className={StyleSheet.buttonCreate} >submit</button>
            </div>
            </table>
            </form>
        </section>
    )
};
