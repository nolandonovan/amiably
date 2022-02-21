import * as React from 'react';
import { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import StyleSheet from '../styles/styleSheet.module.css';
// import Edit from './editProfile';
import ProfileInfo from './profileInfo';


// interface ProfileProps {
//     contacts: [
//         {id: 1, name: "Zoe", lastName: "Richardson"},
//       {id: 2, name: "Noly", lastName: "Donovan"}
//       ];
// }
 
// interface ProfileState {
    
// }
 
class Profile extends React.Component {

    // const [isEditing, setIsEditing] = useState(false);

    state = {
        isEditing: false,
        contacts: [
            {id: 1, name: "Zoe", lastName: "Richardson"},
            {id: 2, name: "Noly", lastName: "Donovan"}
        ]
      };

    handleEditing = () => {
       ( this.state.isEditing === false) ?
         this.setState({ isEditing: true})  
        :  this.setState({isEditing: false})
    }

    render() { 
        return (  
             
<div className={StyleSheet.profileBackground}>

{ 
 this.state.isEditing ? (<h1>hi</h1>)
  : (<h1>bye</h1>)}

<body className={StyleSheet.bodyProfile}>
   

{/* <!-- Hero Image, Flush : BEGIN --> */}

          <tr className={StyleSheet.hero}>
           <td>
               <img src={"/IMAGES/wp3198779.jpg"} className={StyleSheet.heroImage}/>
           </td>
          </tr>
          
          
{/* <!-- Hero Image, Flush : END --> */}

{/* <!-- 1 BIO : BEGIN --> */}
 <tr className={StyleSheet.profileTab}>
   <td>
       <table className={StyleSheet.tableProfile}> 
   
     {/* <ProfileInfo key={this.state.contacts} name={this.state.contacts} /> */}
     <div className={"CenterProfile"}>
     <img src={"/IMAGES/SHbrunet1.png"} className={StyleSheet.profilePic}/>
     <p className={"friendHeader"}>
         </p>
         
         <span></span>
     </div>
 
       <tr>
         
         <td> 
           
         {/* <!-- NOTHING IN THIS DATA CELL --> */}
           {/* <!-- Button : Begin --> */}
         
           <table className={StyleSheet.tableProfile} >
     
             <tr>
               <td className={StyleSheet.tableDataProfile}>

                
             </td>
             </tr>
           </table>
         {/*<!-- Button : END --> */}
         
         </td>
       </tr>
     </table></td>
 </tr>
        {/* <!-- BIO : END --> */}
        {/* <!-- Two Even Columns : BEGIN --> */}
<tr> 

<td className={StyleSheet.buttonsTable}>
 <table className={StyleSheet.a}>
   <tr>

     <td className={StyleSheet.b}>
     
     <textarea name="profile" cols="70" rows="10"></textarea>
     <br/>

     <div>

     <button type="submit" className={StyleSheet.buttonCreate} onClick={() => this.handleEditing()}>{}</button> 
           {/* {
          
           <button type="submit" className={StyleSheet.buttonCreate} onClick={() => this.handleEditing()}>{}</button> 
           <button type="submit" className={StyleSheet.buttonCreate} onClick={() => this.handleEditing()}>{}</button> 
          } */}
     </div>
   </td>
</tr>
     
   </table> 
 </td>

</tr>
{/* <!-- Two Even Columns : END --> */}

</body>



</div>

        );
    }
}
 
export default Profile;