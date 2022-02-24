import { firestore, auth } from "../lib/firebase";
import { useRouter } from "next/router"
import toast from 'react-hot-toast';

export default function Page({ }) {
    const router = useRouter();

    const id = "NYG4l0ihL40s4hxqnXns" //manually insert a doc ID here
    const uid = auth.currentUser.uid;
    const contactRef = firestore.collection('users').doc(uid).collection('contacts').doc(id);

    async function deleteContact(){
        await contactRef.delete()
        .then(res => {
           console.log("Contact deleted!");
           router.push('/')
           toast.success("Contact Deleted")
        }).catch(error => {
           console.error("Error deleting contact: ", error);
        });
    }

  return (
      <main>
          <h1>Testing Delete functionality</h1>
          <p>Contact ID: {id}</p>
          <button onClick={deleteContact}>delete</button>
      </main>
  )
}