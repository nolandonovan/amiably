import { useRouter } from "next/router"
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";
import StyleSheet from '../../styles/styleSheet.module.css';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from 'next/link';
import { SP } from "next/dist/shared/lib/utils";


export default function Contact() {
    

  const router = useRouter();
  
  const uid = auth.currentUser.uid;
  const { id } = router.query;
  const [contact,setContact] = useState("")
  const [editing,setEditing] = useState(false);
  
  function cancel(){
    setEditing(false)
}

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
    <div className={StyleSheet.profileBackground}>
    <body className={StyleSheet.bodyProfile}>
  
    {/* <!-- Hero Image, Flush : BEGIN --> */}
      <tr className={StyleSheet.hero}>
      <td>
        <img src={"/IMAGES/wp3198779.jpg"} className={StyleSheet.heroImage}/>
      </td>
      </tr>
             
   {/* <!-- Hero Image, Flush : END --> */}
   {/* <!-- 1 BIO : BEGIN --> */}
    <tr>
      <td>
        <table className={StyleSheet.tableProfile}> 
        <div className={"CenterProfile"}>
        <img src={"/IMAGES/ZoeFace.jpg"} className={StyleSheet.profilePic}/>
        {/* <div data-initials="GC"></div> */}
        <div className={StyleSheet.detailHeader}>
            <textarea disabled={!editing} className={editing ? StyleSheet.showEditing : '' } defaultValue={contact.name}></textarea>
            {/* <textarea disabled={!editing} className={editing ? StyleSheet.showEditing : '' } defaultValue={contact.phone}></textarea> */}
            {/* <textarea disabled={!editing} className={editing ? StyleSheet.showEditing : '' } defaultValue={contact.Birthday}></textarea> */}
        </div>
           
        </div>
          <tr>
            <td> 
              
            {/* <!-- NOTHING IN THIS DATA CELL --> */}
              
            
              {/* <!-- Button : Begin --> */}
            
              <table className={StyleSheet.tableProfile} >
        
                <tr>
                  <td className={StyleSheet.tableDataProfile}>
  
                    {/* </a> */}
                </td>
                </tr>
              </table>
            {/*<!-- Button : END --> */}
            
            </td>
          </tr>
        </table></td>
    </tr>
           {/* <!-- BIO : END --> */}
           {/* <!-- Two Even Columns : BEGIN --> */}
    <tr> 
    <td className={StyleSheet.buttonsTable}>
      <table className={StyleSheet.a}>
        <tr>
          <td className={StyleSheet.b}>
          <textarea placeholder={"Add notes here..."} disabled={!editing} cols="70" rows="10"></textarea>
          <div className={"container"}>
            <form>
            <div className={editing ? "" : StyleSheet.hidden}>
                <button>Save</button>
                <button className={StyleSheet.buttonList} onClick={() => cancel()}>Cancel</button>
            </div>
            </form>
            <div className={editing ? StyleSheet.hidden : ""}>
                <button className={StyleSheet.buttonCreate} onClick={() => setEditing(true)}>✏️</button>
            </div>
            
        </div>   
        </td>
    </tr>
        </table> 
      </td>
    </tr>
    {/* <!-- Two Even Columns : END --> */}

    </body>
    </div>
  
  );
  
};

