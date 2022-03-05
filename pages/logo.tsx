import React from "react";
import StyleSheet from '../styles/styleSheet.module.css'
import toast from 'react-hot-toast';
import { initializeFirestore } from "firebase/firestore";


/*
grab contact name ( and eventaully color) grab first letter to make logo
*/

const InitialLogo = (userObj) => {

 console.log("userObj", userObj);

    return ( 
        <div>
            {/* {userObj.userObj.map((userData, index) => {
                return ( */}
                   <div className={StyleSheet.initialLogo} >
                       <p className={StyleSheet.initial}>{userObj.userObj.name.charAt(0) }</p>
                   </div>
                {/* )
            })} */}
        </div>
     );
}
 
export default InitialLogo;