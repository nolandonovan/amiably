import { auth, googleAuthProvider } from '../lib/firebase';

export default function Login(props) {
  const user = null;

  return (
    <div className="sign-in">
      {<SignInButton />}
    </div>
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