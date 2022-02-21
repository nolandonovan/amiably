import React from "react";
import StyleSheet from '../../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';

export default function CreateContact() {

    const { user } = useContext(UserContext);

    return (
        <main className={StyleSheet.formTable}>
            <h1>create new contact</h1>
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
            <table className={StyleSheet.formTable}>
            <label>name: 
                <input name="name" placeholder="John Smith" onChange={e => setName(e.target.value)} /><br/>
            </label><br/>
            <label>phone: 
                <input name="phone" placeholder="716-776-2323" onChange={e => setPhone(e.target.value)} /><br/>
            </label><br/>
            <div>
                <button type="submit" className={StyleSheet.buttonCreate} >submit</button>
            </div>
            </table>
            </form>
        </section>
    )
};
 
// class createNew extends React.Component {
//     constructor(props){
//     super(props)
//     this.state = {
//         value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//     this.setState({value: event.target.value})
// }

// handleSubmit(event) {
// event.preventDefault();
// }

// render() { 
//     return (
//         <form onSubmit={this.handleSubmit} className={StyleSheet.profileBackground}>
//             <table className={StyleSheet.formTable}>
//                 <tr>
//             <label>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             </tr>
//             <tr>
//             <label>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             </tr>
//             <tr>
//             {/* <input type="submit" value={"Submit"} /> */}
//             <button className={StyleSheet.buttonCreate} type="submit" value={"Submit"} onClick={() => toast.success('Hello '+ this.state.value)}>
//                 submit
//           </button>
//           </tr>
//           </table>
//         </form>
//         );
// }
// }
 
// export default createNew;
