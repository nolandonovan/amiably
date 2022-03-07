import { useRouter } from "next/router"
import { firestore, auth } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";
import StyleSheet from '../../styles/styleSheet.module.css';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from 'next/link';
import { SP } from "next/dist/shared/lib/utils";
import InitialLogo from "../../components/contactLogo";
import Navbar from "../../components/navbar";

export default function Contact() {
    
  const router = useRouter();

  const uid = auth.currentUser.uid;
  const { id } = router.query;
  const [contact,setContact] = useState("")
  const [editing,setEditing] = useState(false);
  const [contactEdit,setContactEdit] = useState("")

  const contactRef = firestore.collection('users').doc(uid).collection('contacts').doc(id);

  useEffect(() => {
    console.log(`useEffect triggered`);
    if (router.isReady){
      getContact()
    }
    else {console.log('router is not ready')}
  },[id]);

  async function getContact(){
    const contactData = await contactRef.get();
    setContact(contactData.data())
    setContactEdit(contactData.data())
    console.log("Get contact ran")
  }

  async function save(){
    setEditing(false)    
    await contactRef.set(
      contactEdit
    );
    toast.success("Saved")
    setContact(contactEdit)
  }

  function cancel(){
    setEditing(false)
    let noteCheck = contact.note ? contact.note : "";
    setContactEdit({...contact, note: noteCheck})
  }
  
  function edit(e) {
    setContactEdit({ ...contactEdit, [e.target.name]: e.target.value });
    console.log(contactEdit)
  };

  async function deleteContact(){
    await contactRef.delete()
    .then(res => {
      console.log("Contact deleted");
      router.push('/')
      toast.success("Contact Deleted")
    }).catch(error => {
      console.error("Error deleting contact: ", error);
    });
}

  return (
    <>
    <Navbar/>
    <main>
      <div className={StyleSheet.bodyProfile}>    
        <img src={"/IMAGES/wp3198779.jpg"} className={StyleSheet.heroImage}/>
        <div className={StyleSheet.floatCenter}>
          <InitialLogo contact={contactEdit}/>
        </div>
        <div className={StyleSheet.centerDetail}>
          <p>
            <textarea disabled={!editing} className={editing ? StyleSheet.showEditing : '' } name="name" value={contactEdit ? contactEdit.name : ""} onChange={(e) => edit(e)}></textarea>
          </p>
        </div>  
        <td className={StyleSheet.buttonsTable}>
          <textarea disabled={!editing} placeholder={"Add notes here..."} className={editing ? StyleSheet.showEditing : '' } name="note" value={contactEdit ? contactEdit.note : ""} onChange={(e) => edit(e)} cols="70" rows="10"></textarea>
          <div>
            <div className={editing ? "" : StyleSheet.hidden}>
              <button type="button" className={StyleSheet.buttonCreate} onClick={() => save()}>Save</button>
              <button type="button" className={"btn btn-secondary"} onClick={() => cancel()}>Cancel</button>
            </div>
            <div className={editing ? StyleSheet.hidden : ""}>
              <button type="button" className={StyleSheet.buttonCreate} onClick={() => setEditing(true)}>✏️</button>
            </div>  
          </div>  
        </td>       
      </div>
    </main>
    </>
  
  );
};