import '../styles/globals.css'

import { GetServerSideProps } from 'next';
import { Toaster } from 'react-hot-toast';
import Login from '../components/login'
import { UserContext } from '../lib/context';

import { useUserData } from '../lib/hooks';


function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp