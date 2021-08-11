import React from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <React.Fragment>
      <FullName></FullName>
      <Address></Address>
{/* Experimenting with inline styling */}
      <p style={{color:'#26496E', textAlign:'center'}}><b>Hover Over Picture</b></p>
      <ProfilePhoto></ProfilePhoto>
    </React.Fragment>
  );
}

export default App;
