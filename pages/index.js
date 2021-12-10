import Head from 'next/head';
import SpoonDescription from '../components/SpoonDescription';
import Frame from '../components/Frame';
import Header from '../components/Header'
import { useState } from 'react';
import MintSlider from '../components/MintSlider';
import Alert from '../components/Alert';

export default function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState("");

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
  
  function handleVerification(value) {
    setIsConnected(value);
  }


  return (
    // <div className="bg-gradient-to-tr from-gray-900 to-gray-600 text-white">
    <div className="bg-gray-medium text-yellow-medium">
      <Head>
        <title>IPFS Spoons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header verified={isConnected} updateStatus={handleVerification} sendAlert={showAlert} saveAddress={writeAddress} saveErrorMessage={writeErrorMessage}/>
      {connectionError && <Alert message={errorMessage}/>}
      <main className="max-w-7xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
        <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
          <div className="">
            <SpoonDescription totalMinted={totalMinted} />
          </div>
          <div className="">
            <Frame />
            <MintSlider verified={isConnected} mintAddress={address} currentMint={totalMinted} updateMint={incrementMint} />
            {!isConnected && <Alert message="Connect to ETH mainnet to mint"/>}
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