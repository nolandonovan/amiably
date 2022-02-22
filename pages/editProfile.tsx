import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';

/* 
This fuction is an edit button that changes the state from is the user editing to false or true when pressed.
*/

function Edit (){

    const [isEditing, setIsEditing] = useState(false);


    return (
        <div>
            {
            isEditing == false ? 
            <p>edit</p>
            // <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(false)}>save edits</button> 
            : <p>save</p>
            //  <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(true)}>edit</button> 
           }
      </div>
    )


    
}

export default Edit;