import { GiSandsOfTime } from "react-icons/gi";

function IPFSSplash() {
    return (
        <div className="bg-gray-medium text-yellow-medium">
            <main className="max-w-7xl mx-auto px-8 h-[800px] md:px-16 md:h-[1100px] space-y-10 text-center items-center">
                <h1 className="mt-20 text-3xl">The Concave Spoons NFT Collection.</h1>
                <p className="text-2xl">Launching December 13th.</p>
                <div className="ml-[200px] sm:ml-[400px] lg:ml-[550px] animate-pulse text-5xl"><GiSandsOfTime /></div>
            </main>
        </div>
    )
}

export default IPFSSplash
