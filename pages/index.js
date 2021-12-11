import Head from 'next/head';
import SpoonDescription from '../components/SpoonDescription';
import Frame from '../components/Frame';
import Header from '../components/Header'
import { useState } from 'react';
import MintSlider from '../components/MintSlider';
import Alert from '../components/Alert';
import PrivateView from '../components/PrivateView';

export default function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState("");
  const [isPublicMintActive, setIsPublicMintActive] = useState(false);
  const [numToken, setNumToken] = useState(6);
  const [tokenList, setTokenList] = useState([]);

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

  // var concavenft = new Contract(jsonInterface, address);
  // useEffect(() => {
  //   try {
  //     const status = await concavenft.isPublicMintActive();
  //    setIsPublicMintActive(status)
  //   } catch (err) {
  //     console.log("An error occured when calling contract")
  //   }
  // }, [])

  return (
    // <div className="bg-gradient-to-tr from-gray-900 to-gray-600 text-white">
    <div className="bg-gray-medium text-yellow-medium">
      <Head>
        <title>IPFS Spoons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header verified={isConnected} updateStatus={handleVerification} sendAlert={showAlert} saveErrorMessage={writeErrorMessage} saveAddress={writeAddress} saveNumToken={writeNumToken} saveTokenList={writeTokenList} />
      {connectionError && <Alert message={errorMessage} />}
      <main className="max-w-7xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
        <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
          <div className="">
            <SpoonDescription totalMinted={totalMinted} />
          </div>
          <div className="">
            <Frame />
            {!isPublicMintActive && <p className='p-2'>You have {numToken} colors</p>}
            <div>
              {!isPublicMintActive && <MintSlider verified={isConnected} mintAddress={address} currentMint={totalMinted} updateMint={incrementMint} numToken={numToken} tokenList={tokenList}/>}
              {isPublicMintActive && <MintSlider verified={isConnected} mintAddress={address} currentMint={totalMinted} updateMint={incrementMint} numToken={10} tokenList={tokenList}/>}
              {!isConnected && <Alert message="Connect to ETH mainnet to mint" />}
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