import Head from 'next/head';
import SpoonDescription from '../components/SpoonDescription';
import Frame from '../components/Frame';
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import MintSlider from '../components/MintSlider';
import Alert from '../components/Alert';
let web3 = require('web3');
import detectEthereumProvider from '@metamask/detect-provider';
import { InjectedConnector } from "@web3-react/injected-connector";

export default function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState("");
  const [isPublicMintActive, setIsPublicMintActive] = useState(false);
  const [numToken, setNumToken] = useState(0);
  const [tokenList, setTokenList] = useState([]);
  const CONTRACT = {
    'ADDRESS': "0x77d540e700Bb6770d309397c51Ca4a79Bd0a1779",
    'ABI': [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"mintColorsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mintColorsOnce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintMany","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_active","type":"bool"}],"name":"setPublicMintActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUnmintedSpoonsByUser","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicMintActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSoldOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"THE_COLORS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_COLORS_QUOTA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TREASURY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
  }
  
  function incrementMint(value) {
    setTotalMinted(value);
  }
  
  function showAlert(value) {
    setConnectionError(value);
  }
  
  function writeErrorMessage(value) {
    setErrorMessage(value);
  }
  
  function writeAddress(value) {
    setAddress(value);
  }
  
  function writeNumToken(value) {
    setNumToken(value)
  }
  
  function writeTokenList(value) {
    setTokenList(value)
  }
  
  function handleVerification(value) {
    setIsConnected(value);
  }
  
  
  async function updateTotalSupply() {
    let w3 = new web3(ethereum);
    let contract = new w3.eth.Contract(CONTRACT["ABI"], CONTRACT["ADDRESS"]);
    let totalSupply;                                                                         
    await contract.methods.totalSupply().call().then((_result) => {
      totalSupply = _result;
    }).catch((err) => console.log(err));
    setTotalMinted(totalSupply)
  }
  
  async function publicSaleStatus() {
    let w3 = new web3(ethereum);
    let contract = new w3.eth.Contract(CONTRACT["ABI"], CONTRACT["ADDRESS"]);                                                              
    await contract.methods.isPublicMintActive().call().then((_result) => {
      setIsPublicMintActive(_result);
    }).catch((err) => console.log(err));
  }
  
  const colorTokenList = async (passAddress) => {
    let w3 = new web3(ethereum);
    let contract = new w3.eth.Contract(CONTRACT['ABI'], CONTRACT['ADDRESS']);
    let tokenList;
    await contract.methods.getUnmintedSpoonsByUser(passAddress).call().then((_result) => {
      console.log(_result);
      tokenList = _result.filter(token => token < 9999);
    }).catch((err) => console.log(err));
    return tokenList
  };
  
  const connectWallet = () => {
    try {
      if (detectEthereumProvider()) {
        const account = ethereum.request({ method: 'eth_requestAccounts' });
        if (ethereum.chainId == "0x4") { // eth = 0x1 rinkeby = 0x4
          // console.log("User is connected");
          account.then(async function (result) {
            let currAddress = result[0];
            handleVerification(true);
            showAlert(false);
            writeAddress(currAddress);
            let tokenList = await colorTokenList(currAddress);
            writeTokenList(tokenList); // from metamask
            writeNumToken(tokenList.length) // an integer, size of the list we get back from metamask
          })
        } else {
          handleVerification(false);
          showAlert(true);
          writeErrorMessage("Connect to Ethereum Mainnet");
        }
      }
    }
    catch (error) {
      handleVerification(false);
      showAlert(true);
      writeErrorMessage("Please install MetaMask!");
    }
  }
  
  
  const injected = new InjectedConnector({ supportedChainIds: [1, 4, 1337] });
  
  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        connectWallet();
      }
    });
    if (window.ethereum) {
      updateTotalSupply();
      publicSaleStatus();
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          connectWallet();
        } else {
          writeNumToken(0);
          handleVerification(false);
        }
      });
      window.ethereum.on("networkChanged", () => {
        connectWallet();
      });
    }
  }, []);
  
  return (
    // <div className="bg-gradient-to-tr from-gray-900 to-gray-600 text-white">
    <div className="bg-gray-medium text-yellow-medium">
    <Head>
    <title>IPFS Spoons</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header verified={isConnected} fullAddress={address} connectWallet={connectWallet} />
    {connectionError && <Alert message={errorMessage} />}
    <main className="max-w-7xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
    <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
    <div className="">
    <SpoonDescription totalMinted={totalMinted} />
    </div>
    <div className="">
    <Frame />
    {!isPublicMintActive && <p className='p-2'>You have {numToken} unclaimed "The Colors" NFTs</p>}
    {(!isPublicMintActive && numToken == 0) && <p className='p-2'>Acquire a "The Colors" NFT to participate in the presale!</p>}
    <div>
    {(!isPublicMintActive && numToken > 0) && <MintSlider verified={isConnected} mintAddress={address} currentMint={totalMinted} updateMint={incrementMint} numToken={numToken} tokenList={tokenList} contractInfo={CONTRACT}/>}
    {isPublicMintActive && <MintSlider verified={isConnected} mintAddress={address} currentMint={totalMinted} updateMint={incrementMint} numToken={25} tokenList={tokenList} isPublicMintActive={isPublicMintActive} contractInfo={CONTRACT}/>}
    {!isConnected && <Alert message="Connect to Ethereum Mainnet to mint" />}
    </div>
    </div>
    </section>
    </main>
    </div>
    )
  }
  
  // export async function getStaticProps() {
  //   const data1 = await fetch("").
  //     then(
  //       (res) => res.json()
  //     );
  
  //   const data2 = await fetch("").
  //     then(
  //       (res) => res.json()
  //     );
  
  //   return {
  //     props: {
  //       data1,
  //       data2
  //     }
  //   }
  // }
