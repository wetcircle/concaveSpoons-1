import Image from "next/image";
import spoon from "../public/spoon.gif";
import MintSlider from "./MintSlider";
import { useState } from 'react';

function Frame() {
    const [isConnected, SetIsConnected] = useState(true);

    return (
        <div className="-ml-2 md:ml-0 overflow-hidden flex-col">
            <div className="h-[350px] w-[350px] md:h-[500px] md:w-[500px] border-2">
                <div className="relative h-[335px] w-[335px] md:h-[480px] md:w-[480px] border-2 mx-auto mt-[8px] mb-[5px]">
                    <Image src={spoon} layout="fill" objectFit="cover" />
                </div>
                {/* <div className="flex grid-cols-2">
                    <div className="border-t-2">
                        <div className="w-[250px]">Displaying a random seed</div>
                        <div>Concave spoons</div>
                    </div>
                    <div className="h-[96px] w-[250px] border-t-2 border-l-2 items-center py-5">
                        <div className="text-xl">Connect a wallet to mint</div>
                    </div>
                </div> */}
            </div>

            <div className="flex mt-8">
                {/* <div className="hover:animate-bounce space-x-2 border-2 py-3 px-4 rounded-full cursor-pointer">
                    <p className="text-xs md:text-base">Displaying a random seed</p>
                    <p className="text-xs md:text-sm lg:text-base">Concave Spoons</p>
                </div> */}
                {/* <div className="hover:animate-pulse md:ml-10 flex items-center space-x-2 border-2 py-3 px-20 cursor-pointer">
                    <p className="text-base md:text-xl lg:text-2xl">Connect a wallet to mint!</p>
                </div> */}
            </div>
        </div>
    )
}

export default Frame
