import '../styles/globals.css'
import { GetServerSideProps } from 'next';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import AuthCheck from '../components/AuthCheck';
import Navbar from '../components/navbar';



function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return (
   
    <UserContext.Provider value={userData}>
       
      <AuthCheck>
        <Component {...pageProps} />
        <Toaster />
      </AuthCheck>
    </UserContext.Provider>
  )
}

export default MyApp