import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { auth, firestore } from '../lib/firebase';
import { UserContext } from '../lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import toast from 'react-hot-toast';
import { getDocs, collection } from "firebase/firestore";
import AuthCheck from '../components/AuthCheck';
import Contacts from '../lib/contacts';



// export async function getServerSideProps() {

//   //const user = useContext(UserContext)
//   const user = useUserData();

//   const contacts = await getDocs(collection(firestore,`users/${user.uid}/contacts`))
//   contacts.forEach((doc) => {
//     console.log(doc.data()); // "doc1", "doc2" and "doc3"
//   });

//   return {
//     props: { contacts }, // will be passed to the page component as props
//   };
// }



// usestate



export default function Home() {

  const user = useContext(UserContext)


  return (
    <main>
        <h1>Home</h1>
        <Contacts></Contacts>
    </main>
  );
}