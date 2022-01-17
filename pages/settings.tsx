import { Toaster } from 'react-hot-toast';
import Login from '../components/login'


export default function Settings(props) {
  const user = null;

  return (
    <main>
      <h1>Settings</h1>
      <h2>Log out</h2>
      <SignOutButton/>
    </main>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
