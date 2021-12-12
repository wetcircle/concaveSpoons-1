import { GiSpoon } from "react-icons/gi";

function AboutDescription() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-extrabold">About</h1>
            <p className="text-lg">The Concave Spoons is a dual collection in collaboration with The Colors on IPFS and on-chain. The IPFS collection consists of 8888 images, exactly the same number of Colors NFTs in existence. The backgrounds used in the collection are the Colors NFTs, in the same exact order. Our on-chain collection consists of 8888, fully on-chain SVGs which are generated on-mint using the Colors Primitive smart contracts.</p>
            <div className="space-y-6">
                <h1 className="text-2xl font-extrabold">Why a dual collection?</h1>
                <p>Good question. We spent a lot of time discussing this very same thing, analyzing pros and cons, agreeing and disagreeing on what our focus should be. We realized however that there can't be a definitive answer, since there are bound to be different audiencies with different tastes in the Venn diagram of IPFS and On-chain enjoyers.  </p>
                <p>So we decided to please both. Art-heads will be able to mint the IPFS version that allows for more intricacies, higher detail and aesthetic depth, while blockchain-heads will have their fully on-chain stored Spoons with a small hit on detail but an A+ on technology, and the folks in the middle of the Venn diagram will have both.</p>
                <p>This course took some time to settle into, but we are confident it was the right choice and we hope you feel the same way.</p>
            </div>
            <div className="space-y-2">
            <h1 className="text-2xl fon-extrabold">Team</h1>
            <a href="https://linktr.ee/TheConcaveSpoons" className="animate-bounce flex items-center space-x-2"> <p>Concave Spoons</p> <GiSpoon /></a>
            </div>
        </div>
    )
}

export default AboutDescription
