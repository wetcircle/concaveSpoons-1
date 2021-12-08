import { FaWallet } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";

function Header() {
    const router = useRouter();
    const ethereumButton = document.querySelector('.enableMetaMask');
    ethereumButton.addEventListener('click', () => {
        ethereum.request({ method: 'eth_requestAccounts' });
    });
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
    return (
        <header className="sticky text-sm md:text-lg top-0 z-50 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-5 md:px-10 items-center bg-gray-medium2">
            {/* Left */}
            <div>
                <div className="flex overflow-hidden max-w-max border-2 justify-center items-center py-3 space-x-3 sm:space-x-5 px-6">
                    <div onClick={() => router.push("/")} className="hover:animate-ping cursor-pointer font-bold">mint</div>
                    <div className="text-xl">∞</div>
                    <div onClick={() => router.push("/ipfs")} className="hover:animate-ping cursor-pointer font-bold">IPFS spoons</div>
                    <div className="text-xl">∞</div>
                    <div onClick={() => router.push("/onchain")} className="hover:animate-ping cursor-pointer font-bold">on-chain spoons</div>
                    <div className="text-xl">∞</div>
                    <div onClick={() => router.push("/more")} className="hover:animate-ping cursor-pointer font-bold">about</div>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end">
                <div class="enableMetaMask" className="hover:animate-bounce flex items-center space-x-2 border-2 py-3 px-5 cursor-pointer">
                    <p>connect</p>
                    <FaWallet />
                </div>
            </div>
        </header>
    )
}

export default Header
