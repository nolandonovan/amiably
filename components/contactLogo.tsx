import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import toast from 'react-hot-toast';
import { initializeFirestore } from "firebase/firestore";


/*
grab contact name ( and eventaully color) grab first letter to make logo
*/

const InitialLogo = (props) => {

 console.log("LogoProps", props);

    return ( 
        <div className={StyleSheet.initialLogo} >
            <p className={StyleSheet.initial}>{props.contact ? props.contact.name.charAt(0) : ''}</p>
        </div>
     );
}
 
export default InitialLogo;