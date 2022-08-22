import * as React from "react";
import { ethers } from "ethers";
import './App.css';

const wave = () => {
    
}

const App = () => {
  const checkIfWalletIsConnected = () => {
    /* First make sure we have access to window.ethereum */
const { ethereum } = window;

if (!ethereum) {
  console.log("Make sure you have MetaMask installed and logged in");
} else {
  console.log("We have the ethereum object", ethereum);
  }
}

/* This runs our function when the page loads. */

useEffect(() => {
  checkIfWalletIsConnected();
}, [])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        It's a mint party 🎉
        </div>

        <div className="bio">
          minting fun tokens is a great way to get some fun in your life.


        </div>
      <div className="buttonContainer">
        <button className="FunButton" onClick={wave}>
          Mint a fun token 
        </button>
      </div>
      </div>
    </div>
  );
}

export default App