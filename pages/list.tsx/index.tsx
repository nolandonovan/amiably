import Head from 'next/head';
// import Image from 'next/image';
//import styles from '../styles/stylesheet.module.css';
import toast from 'react-hot-toast';
import React from 'react';
import StyleSheet from '../../styles/styleSheet.module.css'
import { ListComponent } from './listComponent';

// LIST : BEGIN

export default function List() {



// HTML : BEGIN

    return (

        <>
        
        <title>amiably</title>
        <body className={StyleSheet.backgroundList}>
        <table className={StyleSheet.tableList}>

      <ul className={StyleSheet.list}>
          <ListComponent />

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
    <a className={StyleSheet.buttonList}   onClick={() => {
    window.location.href = '/createNew';
  }} >
    add a friend
    </a>
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
 
