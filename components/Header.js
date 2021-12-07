import { FaWallet } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky text-sm md:text-lg top-0 z-50 grid grid-cols-1 md:grid-cols-2 space-y-3 p-5 md:px-10 items-center bg-white">
            {/* Left */}
            <div>
                <div className="flex w-max border-4 rounded-full justify-center items-center py-3 space-x-3 sm:space-x-5 px-6">
                    <div className="cursor-pointer font-bold">Mint</div>
                    <div>///</div>
                    <div className="cursor-pointer font-bold">IPFS Spoons</div>
                    <div>///</div>
                    <div className="cursor-pointer font-bold">On-chain Spoons</div>
                    <div>///</div>
                    <div className="cursor-pointer font-bold">About</div>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end">
                <div className="flex items-center space-x-2 border-2 py-3 px-4 rounded-full cursor-pointer">
                    <p>Connect</p>
                    <FaWallet />
                </div>
            </div>
        </header>
    )
}

export default Header
