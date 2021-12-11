import { BsTwitter } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";

function SpoonDescription( {totalMinted} ) {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-extrabold">The Concave Spoons</h1>
            <p className="text-lg">The Concave Spoons is an exclusive collection of Concave X Colors Spoons living on IPFS. The backgrounds used in the collection are the Colors NFTs, in the same exact order. </p>
            <p className="text-lg">The first 200 Spoons are free to mint for Colors NFT holders at a 1:1 rate.</p>
            <p className="text-lg">In a world of forks, frens spoon frens</p>
            <div className="space-y-3">
                <div className="flex space-x-6 items-center text-2xl">
                    <a href="https://twitter.com/Concave_Spoons" className="hover:animate-spin cursor-pointer"><BsTwitter /></a>
                    <div className="text-xl">∞</div>
                    <a href="https://medium.com/@The_Concave_Spoons" className="hover:animate-spin cursor-pointer text-3xl"><FaMedium /></a>
                    <div className="text-xl">∞</div>
                    <a href="https://opensea.io" className="hover:animate-spin cursor-pointer text-3xl"><GiSailboat /></a>
                    <div className="text-xl">∞</div>
                    <a href="https://discord.com/invite/pPfSGF5PRV" className="hover:animate-spin cursor-pointer text-3xl"><FaDiscord /></a>
                </div>
                <div className="border-b w-90 pt-2" />
                <div className="flex space-x-5 items-center">
                    <div className="flex items-center space-x-1">
                    <div className="text-xl">Price = 0.02</div>
                    <FaEthereum />
                    </div>
                    <div className="text-xl">∞</div>
                    <div className="text-lg"> {totalMinted} / 8888 Minted </div>
                </div>
            </div>
        </div>
    )
}

export default SpoonDescription