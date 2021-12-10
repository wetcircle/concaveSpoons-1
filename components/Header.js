import { FaWallet } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";
import detectEthereumProvider from '@metamask/detect-provider';
import { useState } from "react";

function Header({ verified, updateStatus, sendAlert, saveErrorMessage, saveAddress }) {
    const router = useRouter();
    const [localAddress, setLocalAddress] = useState("Connect wallet");

    return (
        <header className="sticky text-sm md:text-lg top-0 z-50 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-5 md:px-10 items-center bg-gray-medium2">
            {/* Left */}
            <div>
                <div className="flex overflow-hidden max-w-max border-2 justify-center items-center py-3 space-x-3 sm:space-x-5 px-6">
                    <div onClick={() => router.push("/")} className="hover:animate-pulse cursor-pointer font-bold">The Concave Spoons</div>
                    <div className="text-xl">∞</div>
                    <div onClick={() => router.push("/onchain")} className="hover:animate-pulse cursor-pointer font-bold">On-chain Spoons</div>
                    <div className="text-xl">∞</div>
                    <div onClick={() => router.push("/more")} className="hover:animate-pulse cursor-pointer font-bold">About</div>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end">
                <div
                    onClick={
                        (e) => {
                            e.preventDefault();
                            try {
                                if (detectEthereumProvider()) {
                                    const account = ethereum.request({ method: 'eth_requestAccounts' });
                                    if (ethereum.chainId == "0x1") { // eth = 0x1 rinkeby = 0x4
                                        updateStatus(true);
                                        sendAlert(false);
                                        // console.log("User is connected");
                                        account.then(function (result) {
                                            let currAddress = result[0];
                                            saveAddress(currAddress);
                                            setLocalAddress(currAddress.slice(0, 6) + "..." + currAddress.slice(-6));
                                        })
                                    } else {
                                        updateStatus(false);
                                        sendAlert(true);
                                        saveErrorMessage("Connect to eth mainnet");
                                    }
                                }
                            }
                            catch (error) {
                                updateStatus(false);
                                sendAlert(true);
                                saveErrorMessage("Please make sure that MetaMask is installed and connected to eth mainnet");
                            }
                        }
                    }
                    className="hover:animate-pulse flex items-center space-x-2 border-2 py-3 px-5 cursor-pointer">
                    <p>{localAddress}</p>
                    <FaWallet />
                </div>
            </div>
        </header>
    )
}

export default Header
