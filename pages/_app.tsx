import '../styles/globals.css'

import {GetServerSideProps} from 'next';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
