import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StyleSheet from '../../styles/styleSheet.module.css'


export default function ContactDetailTest({ }) {
  const contact = {"name": "Nolan Donovan", "phone": "913-925-0609", "note": "Nolan is a nice guy. he likes to code and is super smart."}
  
  const [editing,setEditing] = useState(false);
  const [note,setNote] = useState(contact.note);

    //disable enable
    //make button 
    //make function
    //make text area disabled/enable based on editmode button
    console.log(editing)

    function cancel(){
        setEditing(false)
        setNote(contact.note)
    }

  return (
    <main>
        <div className={"container"}>
            <h1>{contact.name}</h1>
            <p>{contact.phone}</p>
            <form>
            <textarea placeholder={"Add notes here..."} disabled={!editing}>{note}</textarea>
            <div className={editing ? "" : StyleSheet.hidden}>
                <button className="btn-primary">Save</button>
                <button className="btn-secondary" onClick={() => cancel()}>Cancel</button>
            </div>
            </form>
            <div className={editing ? StyleSheet.hidden : ""}>
                <button onClick={() => setEditing(true)}>✏️</button>
            </div>
            
        </div>    
    </main>
  )
}