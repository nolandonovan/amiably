import { useRouter } from "next/router"
import { firestore, auth } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";


export default function Contact() {
  const router = useRouter();
  
  const uid = auth.currentUser.uid;
  const { id } = router.query;
  const [contact,setContact] = useState("")

  
  async function getContact(){
    const contactRef = firestore.collection('users').doc(uid).collection('contacts').doc(id);
    const contactData = await contactRef.get();
    setContact(contactData.data())
    console.log("Get contact ran")
  }
  
  useEffect(() => {
    console.log(`useEffect triggered`);
    if (router.isReady){
      getContact()
    }
    else {console.log('router is not ready')}
  },[id]);
  
  
  return (
      <main>
          <h1>{contact ? contact.name : "No Contact"}</h1>
      </main>
    )    
}
