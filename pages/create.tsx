import { auth, firestore } from '../lib/firebase';
import { UserContext } from '../lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';


export default function CreateContact() {

    const { user } = useContext(UserContext);

    return (
        <main>
            <h1>Create New Contact</h1>
            <CreateContactForm/>
        </main>
    )
}

function CreateContactForm(){
    
    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();
    
        // Create refs for both documents
        const userDoc = firestore.doc(`users/${user.uid}`);
    
        // Commit both docs together as a batch write.
        //await setDoc(userDoc, { displayName: user.displayName, form: formValue});
        
        const contactData = {
            name: name,
            phone: phone
        }
        await userDoc.collection("contacts").add(contactData);
        toast.success("Contact Created!")
      };

      
    return(
        <section>
            <form onSubmit={onSubmit}>
            <label>Name:<br/>
                <input name="name" placeholder="test123" onChange={e => setName(e.target.value)} /><br/>
            </label><br/>
            <label>Phone:<br/>
                <input name="phone" placeholder="716-776-2323" onChange={e => setPhone(e.target.value)} /><br/>
            </label><br/>
            <div>
                <button type="submit" className="btn-green">Submit</button>
            </div>
            </form>
        </section>
    )
};
