import React from "react";
import { useRouter } from "next/router"
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';
import Navbar from "../components/navbar";
import { Router } from "react-router";

export default function CreateContact() {

    const { user } = useContext(UserContext);
    const router = useRouter();

    return (
        <>
         <Navbar />
            <main className={StyleSheet.formTable}>
                <h1><strong>Signout?</strong></h1>

                <section>
                
                <div>
                <br/><SignOutButton />
                <button className={StyleSheet.buttonCreate} onClick={() => router.push('/')}>back</button>
                </div>
      
                </section>
  
            </main>
        </>
    )
}

function SignOutButton(){
    const router = useRouter();
    return <button className={StyleSheet.buttonCreate} onClick={() => router.push('/').then(() => auth.signOut())}>yes </button>;

    
};
