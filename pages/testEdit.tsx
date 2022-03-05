// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StyleSheet from '../styles/styleSheet.module.css'
import InitialLogo from './logo';

const LogoTest = () => {
  const contact = {"name": "Nolan Donovan", "phone": "913-925-0609", "note": "Nolan is a nice guy. he likes to code and is super smart."}
  
  const [editing,setEditing] = useState(false);
  const [note,setNote] = useState(contact.note);
  const randomUserObj = [ 
    { name: "Zoe", color: "red"},
    { name: "Nolan", color: "blue"},
];
 const dataTest = "hi";

    //disable enable
    //make button 
    //make function
    //make text area disabled/enable based on editmode button
    // console.log(editing)

    // function cancel(){
    //     setEditing(false)
    //     setNote(contact.note)
    // }

  return (
    <main>
      <InitialLogo userObj={randomUserObj} />
        {/* <div className={"container"}>
            <textarea disabled={!editing} className={editing ? '' : StyleSheet.formShow }>{contact.name} where</textarea>
            
            <p><textarea disabled={!editing} className={editing ? '' : StyleSheet.formShow }>{contact.phone}</textarea></p>
            <form>
            <textarea placeholder={"Add notes here..."} disabled={!editing}>{note}</textarea>
            <div className={editing ? "" : StyleSheet.hidden}>
                <button>Save</button>
                <button className={StyleSheet.buttonList} onClick={() => cancel()}>Cancel</button>
            </div>
            </form>
            <div className={editing ? StyleSheet.hidden : ""}>
                <button onClick={() => setEditing(true)}>✏️</button>
            </div>
            
        </div>     */}
    </main>
  )
}

export default LogoTest;