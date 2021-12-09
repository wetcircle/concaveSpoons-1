import CountDownTimer from "../components/CountdownTimer"
import Header from "../components/Header"
import { GiSandsOfTime } from "react-icons/gi";
import HeaderBack from "../components/HeaderBack";

function Onchain() {
    const hoursMinSecs = { days: 5, hours: 5, minutes: 20, seconds: 40 }

    return (
        <div className="bg-gray-medium text-yellow-medium">
            <HeaderBack />
            <main className="max-w-7xl mx-auto px-8 h-[800px] md:px-16 md:h-[1100px] space-y-10 text-center items-center">
                <h1 className="mt-20 text-3xl">The On-chain Concave Spoons generative collection</h1>
                <p className="text-2xl">More info soon, stay tuned</p>
                <div className="ml-[200px] sm:ml-[400px] lg:ml-[550px] animate-pulse text-5xl"><GiSandsOfTime /></div>
                {/* <CountDownTimer hoursMinSecs={hoursMinSecs} /> */}
            </main>
        </div>
    )
}

export default Onchain
