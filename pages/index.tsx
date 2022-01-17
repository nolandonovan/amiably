import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';

export default function Home() {
  
  const { user, firstName} = useContext(UserContext)
  
  return (
    <div>
      <h1>Home</h1>
      {/* user is signed-in*/}
      {firstName && (
          <>
            <h2>Hello {firstName}!</h2>
            <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
          </>
      )}

      {/* user is NOT signed*/}
      {!firstName && (
        <>
          <h2>Sign in to continue</h2>
            <Link href="/settings">
              <button className="btn-blue">Log in</button>
            </Link>
        </>
      )}
    </div>
  )
}
