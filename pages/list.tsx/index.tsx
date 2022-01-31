import Head from 'next/head';
// import Image from 'next/image';
//import styles from '../styles/stylesheet.module.css';
import toast from 'react-hot-toast';
import React from 'react';
import StyleSheet from '../../styles/styleSheet.module.css'

// List : BEGIN

export default function List() {
    return (

        <>
        <title>amiably</title>
        <body className={StyleSheet.listBackground}>
        <table className={StyleSheet.tableList}>

      <ul>
    <div className={StyleSheet.profile}>
        <img src={'/IMAGES/ZoeFace.jpg'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            Zoe Richardson</p>
            <span>July, 23rd, 1997</span>
        </div>
    </div>

    <div className={StyleSheet.profile}>
        <img src={'IMAGES/SHBlack.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            </p>
            <span>empty</span>
        </div>
    </div>
    <div className={StyleSheet.profile}>
        <img src={'IMAGES/LHblond.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            EMPTY</p>
            <span>empty</span>
        </div>
    </div>
    <div className={StyleSheet.profile}>
        <img src={'IMAGES/SHbrunet1.png'} className={StyleSheet.avatar}/>
        <div>
        <p className={StyleSheet.avatarName}>
            EMPTY</p>
            <span>empty</span>
        </div>
    </div>
</ul>


      <div className={StyleSheet.datatableList}> 
          <button onClick={() => toast.success('hello toast!')}>
          create user
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
 
