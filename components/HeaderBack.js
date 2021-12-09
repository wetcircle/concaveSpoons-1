import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";

function HeaderBack() {
    const router = useRouter();

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
                <div onClick={() => router.push("/")} className="hover:animate-pulse flex items-center space-x-4 border-2 py-3 px-5 cursor-pointer">
                    <BsFillArrowLeftCircleFill />
                    <p>Back to Homepage</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderBack
