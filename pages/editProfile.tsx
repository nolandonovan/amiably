import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';



function Edit (props){

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>

        <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(true)}>edit</button>
        
    </div>
    )


    
}

export default Edit;