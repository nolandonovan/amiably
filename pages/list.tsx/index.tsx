import Head from 'next/head';
// import Image from 'next/image';
//import styles from '../styles/stylesheet.module.css';
import toast from 'react-hot-toast';
import React from 'react';
import StyleSheet from '../../styles/styleSheet.module.css'

// LIST : BEGIN

export default function List() {

// LIST SCRIPT : BEGIN

const contacts = ['Zoe Richardson', 'Nolan Donovan','Sarah Empty'];


if (contacts.length > 0) {

const mappingContacts = contacts.map(function(contact) {
    return (
    <div className={StyleSheet.boxList}>
    <img src={'/IMAGES/ZoeFace.jpg'} className={StyleSheet.avatar}/>
    <div>
    <p className={StyleSheet.avatarName}>
        {contact} </p>
        <span>July, 23rd, 1997</span>
    </div>
    </div>
    ); // return end
 // function end
}); // function end
console.log(mappingContacts);
} 
else
{
    return <p>Make your first contact!</p>
}; // end of else


// LIST SCRIPT : END

// HTML : BEGIN

    return (

        <>
        <title>amiably</title>
        <body className={StyleSheet.backgroundList}>
        <table className={StyleSheet.tableList}>

      <ul className={StyleSheet.list}>
          <div>{}</div>

    {/* <div className={StyleSheet.boxList}>
        <img src={'/IMAGES/ZoeFace.jpg'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            Zoe Richardson</p>
            <span>July, 23rd, 1997</span>
        </div>
    </div>

    <div className={StyleSheet.boxList}>
        <img src={'IMAGES/SHBlack.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            </p>
            <span>empty</span>
        </div>
    </div>
    <div className={StyleSheet.boxList}>
        <img src={'IMAGES/LHblond.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            EMPTY</p>
            <span>empty</span>
        </div>
    </div>
    <div className={StyleSheet.boxList}>
        <img src={'IMAGES/SHbrunet1.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            EMPTY</p>
            <span>empty</span>
        </div>
    </div> */}

</ul>


      <div className={StyleSheet.datatableList}> 
          <button className={StyleSheet.buttonList} onClick={() => toast.success('hello toast!')}>
          add friend
          </button>
      </div>
       
      {/* <!-- Footer : BEGIN --> */}

         <table className={StyleSheet.tableList}>
             
           <tr>
             <td className={StyleSheet.datatableList}>
                 <div  className={StyleSheet.textLinkList}>About Us</div>
                
            </td>

           </tr>
           <tr>
               <td className={StyleSheet.datatableList}><div>amiably</div></td>
           </tr>

         </table>

         {/* <!-- Footer : END --> */}
 
         </table>
      </body>

      </>
    );
};
 
