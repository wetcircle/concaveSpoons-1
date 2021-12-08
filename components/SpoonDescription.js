import { BsTwitter } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

function SpoonDescription() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-extrabold">The Concave Spoons</h1>
            <p className="text-lg">The Concave Spoons is a collection of 4317 images, exactly the same number of Colors NFTs in existence, living on IPFS. The backgrounds used in the collection are the Colors NFTs, in the same exact order. In a world of forks, frens spoon frens</p>
            <div className="space-y-3">
                <div className="flex space-x-6 items-center text-2xl">
                    <a href="https://twitter.com/Concave_Spoons" className="hover:animate-spin cursor-pointer"><BsTwitter /></a>
                    <div className="text-xl">∞</div>
                    <a href="https://medium.com/@The_Concave_Spoons" className="hover:animate-spin cursor-pointer text-3xl"><FaMedium /></a>
                </div>
                <div className="border-b w-90 pt-2" />
                <div className="flex space-x-5 items-center">
                    <div className="text-lg">Price = 0.03</div>
                    <div className="text-xl">∞</div>
                    <div className="text-lg"> Minted </div>
                </div>
            </div>
        </div>
    )
}

export default SpoonDescription