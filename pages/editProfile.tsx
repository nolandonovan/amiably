import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';
import prop from './profileClass';

/* 
This fuction is an edit button that changes the state from is the user editing to false or true when pressed.
*/

function Edit (props: any){

console.log(props.contacts);
let isEditing = (props.value);

    return (
        <div>
            {
            isEditing === false ? 
            <h1>edit {props.contacts}</h1>
            // <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(false)}>save edits</button> 
            : <h1>save</h1>
            //  <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(true)}>edit</button> 
           }
      </div>
    )


    
}

export default Edit;