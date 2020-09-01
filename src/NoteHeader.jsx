import React,{useState} from 'react';
import logo from "./Images/earth.jpg"

const NoteHeader = () => {

  return <>
     <div className="header">
       <img src={logo} alt="logo" width="70" height="50" />
       <h1> &nbsp; Note Keep </h1>
     </div> 
  </>
 };

export default NoteHeader;