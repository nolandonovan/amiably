import { prepareServerlessUrl } from 'next/dist/server/base-server';
import * as React from 'react';
import { useState, Component } from 'react';
// import ReactDOM from 'react-dom';
import StyleSheet from '../styles/styleSheet.module.css'
import Edit from './editProfile';
import ProfileInfo from './profileInfo';


 
class Profile extends React.Component {

    // const [isEditing, setIsEditing] = useState(false);
  
    initialState = {
        isEditing: false,
        contactsData: [
            {id: 1, name: "Zoe", lastName: "Richardson", birthday: '7-12-1997', personalInfo: 'Has an aquarium.'},
            {id: 2, name: "Nolan", lastName: "Donovan", birthday: '4-28-1994', personalInfo: 'Loves to code.'},
        ],
        inputFields: {
          firstName: '',
          lastName: '',
          birthday: '',
          personalInfo: '',

        },
      };

      state = this.initialState;

      buttonName = 'edit';

    handleEditState = () => {
       ( this.state.isEditing === false) ?
         (this.setState({ isEditing: true}) +
         (this.buttonName = 'save'))
        :  ( this.setState({isEditing: false}) +
        (this.buttonName = 'edit'))
    };





    render() { 
        return (  
             
<div className={StyleSheet.profileBackground}>


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
    
  

     <button type="submit" className={StyleSheet.buttonCreate} onClick={() => this.handleEditState()}>{this.buttonName}</button> 
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

{/* <Edit value={this.state.isEditing} contacts={}>  </Edit> */}

</div>

        );
    }
}
 
export default Profile;