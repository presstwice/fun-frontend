import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        It's a mint party 🎉
        </div>

        <div className="bio">
          minting fun tokens is a great way to get some fun in your life.
        </div>

        <button className="waveButton" onClick={wave}>
          Mint a fun token 
        </button>
      </div>
    </div>
  );
}
