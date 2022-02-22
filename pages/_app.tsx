import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import AuthCheck from '../components/AuthCheck';


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