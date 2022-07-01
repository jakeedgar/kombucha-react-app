import React from "react";
import Keg from '../keg.png'

export default function Header(){
  return (
    <React.Fragment>
      <h1 className='header-text'>Totally Normal Kombucha Bar</h1>
      <img className='keg-image'src={Keg} alt="keg" width='25%' height='25%' float="left"/>
    </React.Fragment>
  );
}