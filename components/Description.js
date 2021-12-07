import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

function Information() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-extrabold">The Concave Spoons</h1>
            <p className="text-lg">The Concave Spoons is a collection of 4317 images, exactly the same number of Colors NFTs in existence, living on IPFS. The backgrounds used in the collection are the Colors NFTs, in the same exact order. In a world of forks, frens spoon frens</p>
            <p className="text-lg">All stored on - IPFS</p>
            <div className="space-y-3">
                <div className="flex space-x-6 items-center text-2xl">
                    <div className="cursor-pointer"><BsTwitter /></div>
                    <p>-</p>
                    <div className="cursor-pointer"><SiDiscord /></div>
                </div>
                <div className="border-b w-90 pt-2" />
                <div className="flex space-x-5">
                    <div>Price = 0.03</div>
                    <div> /// </div>
                    <div> Minted </div>
                    <div> /// </div>
                    <div>License NFT</div>
                </div>
            </div>
        </div>
    )
}

export default Information