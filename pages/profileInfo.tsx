import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import { auth, firestore } from "../lib/firebase"
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';
import Edit from "./editProfile";
import Profile from "./profile";


/*
this is a page for holding the editable info

it needs to be sectionable

I should not have to pull 
*/

 function ProfileInfo (props){

function editTask(id: number, text: any) {
    
};

// const contacts = [{
//     id: 1,
//     name: "Zoe",
//     lastName: "Richardson"
//   },
//   {
//     id: 2,
//     name: "Noly",
//     lastName: "Donovan"
//   }
//   ];
    return (
        <div className={"CenterProfile"}>
        <img src="/IMAGES/SHbrunet1.png" className={StyleSheet.profilePic} onInput={e => editTask(contacts.id, e.currentTarget.textContent)}/>
        <div className={"friendHeader"}  contentEditable="true">
            {props.name} </div>
            
            <span></span>
        </div>
    )
};

export default ProfileInfo;
