import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
  const user = null;

  return (
    <main>
      <h1>Login</h1>
      {user ? <SignOutButton /> : <SignInButton />}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {

    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google-logo.svg'} height="25px" width="25px"/> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
