// import * as React from 'react';
// import { useState, Component } from 'react';
// import ReactDOM from 'react-dom';
// import StyleSheet from '../styles/styleSheet.module.css';
// // import Edit from './editProfile';
// import ProfileInfo from './profileInfo';


// // Profile : BEGIN
// const contacts = [
//   {id: 1, name: "Zoe", lastName: "Richardson"},
// {id: 2, name: "Noly", lastName: "Donovan"}
// ];


// export default function Profile() {
  
//   const [isEditing, setIsEditing] = useState(false);

// // const [contactinfo, setContactInfo] = useState(contacts);

// // const updateHandler = (profileInfo) => {
// //   setContactInfo(contactinfo.map)(item => {
// //     if(.id === profileInfo.id) {
// //       return {

// //       }
// //     }
// //   })
// // }



// return (
// <div className={StyleSheet.profileBackground}>

//  { 
//   isEditing ? (<h1>hi</h1>)
//    : (<h1>bye</h1>)}

// <body className={StyleSheet.bodyProfile}>
    

// {/* <!-- Hero Image, Flush : BEGIN --> */}

//            <tr className={StyleSheet.hero}>
//             <td>
//                 <img src={"/IMAGES/wp3198779.jpg"} className={StyleSheet.heroImage}/>
//             </td>
//            </tr>
           
           
//  {/* <!-- Hero Image, Flush : END --> */}

//  {/* <!-- 1 BIO : BEGIN --> */}
//   <tr className={StyleSheet.profileTab}>
//     <td>
//         <table className={StyleSheet.tableProfile}> 
    
//       <ProfileInfo key={contacts.id} name={contacts.name}} />
//       {/* <div className={"CenterProfile"}>
//       <img src={"/IMAGES/SHbrunet1.png"} className={StyleSheet.profilePic}/>
//       <p className={"friendHeader"}>
//           {profile.firstName}</p>
          
//           <span></span>
//       </div> */}
  
//         <tr>
          
//           <td> 
            
//           {/* <!-- NOTHING IN THIS DATA CELL --> */}
//             {/* <!-- Button : Begin --> */}
          
//             <table className={StyleSheet.tableProfile} >
      
//               <tr>
//                 <td className={StyleSheet.tableDataProfile}>

                 
//               </td>
//               </tr>
//             </table>
//           {/*<!-- Button : END --> */}
          
//           </td>
//         </tr>
//       </table></td>
//   </tr>
//          {/* <!-- BIO : END --> */}
//          {/* <!-- Two Even Columns : BEGIN --> */}
// <tr> 

// <td className={StyleSheet.buttonsTable}>
//   <table className={StyleSheet.a}>
//     <tr>

//       <td className={StyleSheet.b}>
      
//       <textarea name="profile" cols="70" rows="10"></textarea>
//       <br/>

//       <div>
//             {
//             isEditing ?
//             <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(false)}>save edits</button> 
//             : <button type="submit" className={StyleSheet.buttonCreate} onClick={() => setIsEditing(true)}>edit</button> 
//            }
//       </div>
//     </td>
// </tr>
      
//     </table> 
//   </td>

// </tr>
// {/* <!-- Two Even Columns : END --> */}

// </body>



// </div>

// );
// };
 