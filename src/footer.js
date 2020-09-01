import React,{useState} from 'react';
import logo from "./Images/earth.jpg"

const Footer = () => {
   
  const year = new Date().getFullYear();

  return <>
     <footer>
        <p> copyright © {year} </p>
     </footer> 
  </>
 };

export default Footer;