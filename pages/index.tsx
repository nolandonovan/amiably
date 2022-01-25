import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import { firestore } from '../lib/firebase';
import { getDocs, collection } from "firebase/firestore";


export async function Users() {
  
  const {user} = useContext(UserContext)
  
  const userContacts = await getDocs(collection(firestore,`users/${user.uid}/contacts`))
  userContacts.forEach((doc) => {
    console.log(doc.data()); // "doc1", "doc2" and "doc3"
  });

};

export default function Home() {
  Users()
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}