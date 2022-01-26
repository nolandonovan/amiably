import Head from 'next/head';
// import Image from 'next/image';
//import styles from '../styles/stylesheet.module.css';
import toast from 'react-hot-toast';
import React from 'react';
import StyleSheet from '../../styles/styleSheet.module.css'



export default function Home() {
    return (
        <>
        <title>amiably</title>
        <body>
        <table className={StyleSheet.tableList}>

        
  
      {/* <div className={StyleSheet.box}> 
          <h1>Home</h1>
          <button onClick={() => toast.success('hello toast!')}>
          create user
          </button>
      </div> */}

      <ul>
                                    <div className={StyleSheet.profile}>
                                        <img src={process.env.PUBLIC_URL + "IMAGES/ZoeFace.jpg"} className={StyleSheet.avatar}/>
                                        <div>
                                        <p className={StyleSheet.avatarName}>
                                            Zoe Richardson</p>
                                            <span>July, 23rd, 1997</span>
                                        </div>
                                    </div>
                            
                                    <div className={StyleSheet.profile}>
                                      {/* <img src="IMAGES/SHBlack.png" class="avatar"> */}
                                      <div>
                                      <p className={StyleSheet.avatarName}>
                                          </p>
                                          <span>empty</span>
                                      </div>
                                    </div>
                                    <div className={StyleSheet.profile}>
                                      {/* <img src="IMAGES/LHblond.png" class="avatar"> */}
                                      <div>
                                      <p className={StyleSheet.avatarName}>
                                          EMPTY</p>
                                          <span>empty</span>
                                      </div>
                                    </div>
                                    <div className={StyleSheet.profile}>
                                      {/* <img src="IMAGES/SHbrunet1.png" class="avatar"> */}
                                      <div>
                                      <p className={StyleSheet.avatarName}>
                                          EMPTY</p>
                                          <span>empty</span>
                                      </div>
                                    </div>
                                </ul>



      </table>

      </body>
      </>
    )
  };
 
