import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import StyleSheet from '../../styles/styleSheet.module.css';


// Profile : BEGIN


export default function Profile() {

  const profile = [ 
    {firstName: 'Zoe',
    lastName: 'Richardson'}

  ];


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
  <tr>
    <td>
        <table className={StyleSheet.tableProfile}> 
    
      <div className={"CenterProfile"}>
      <img src={"/IMAGES/ZoeFace.jpg"} className={StyleSheet.profilePic}/>
      <p className={"friendHeader"}>
          {profile.firstName} {profile.lastname}</p>
          <span>July, 23rd, 1997</span>
      </div>
  
        <tr>
          <td> 
            
          {/* <!-- NOTHING IN THIS DATA CELL --> */}
            
          
            {/* <!-- Button : Begin --> */}
          
            <table className={StyleSheet.tableProfile} >
      
              <tr>
                <td className={StyleSheet.tableDataProfile}>

                  {/* </a> */}
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

    </td>
</tr>
      
    </table> 
  </td>

</tr>
{/* <!-- Two Even Columns : END --> */}

</body>

</div>

);

};
 