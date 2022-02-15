import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { UserContext } from '../lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import Contacts from '../lib/contacts';


export default function Home() {

  const user = useContext(UserContext)


  return (
    <main>
        <h1>Home</h1>
        <Contacts></Contacts>
    </main>
  );
}