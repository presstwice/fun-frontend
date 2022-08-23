import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

const wave = () => {
    
}

const App = () => {

  /* Just a state variable we use to store our user's public wallet. */
  const [currentAccount, setCurrentAccount] = useState("");


  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask installed and logged in");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
/* This runs our function when the page loads. */

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("found an authorized account", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts found")
    }
  } catch (error) {
    console.log(error);
  }
}

/** Implement your connectWallet here */
const connectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

    const accoounts = await ethereum.request({ method: "eth_requestAccounts" });

    console.log("Connected", accoounts[0]);
    setCurrentAccount(accoounts[0]);
  } catch (error) {
    console.log(error)
  }
}

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

        {!currentAccount && (
          <button className="FunButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
      </div>
    </div>
  );
}

export default App