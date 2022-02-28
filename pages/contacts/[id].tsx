import { useRouter } from "next/router"
import { firestore, auth } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";
import StyleSheet from '../../styles/styleSheet.module.css';

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
    <div className={StyleSheet.profileBackground}>
    <body className={StyleSheet.bodyProfile}>
      <tr className={StyleSheet.hero}>
      <td>
        <img src={"/IMAGES/wp3198779.jpg"} className={StyleSheet.heroImage}/>
      </td>
      </tr>
    <tr>
      <td>
        <table className={StyleSheet.tableProfile}> 
        <input className={"CenterProfile"}>
        <img src={"/IMAGES/ZoeFace.jpg"} className={StyleSheet.profilePic}/>
        <p className={"friendHeader"}>
            {contact.name}</p>
            <div>{contact.phone}</div>
            <div>July, 23rd, 1997</div>
        </div>
          <tr>
            <td>             
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
          <textarea name="profile" cols="70" rows="10"></textarea>
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