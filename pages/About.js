import Header from "../components/Header";
import AboutDescription from "../components/AboutDescription";

function About() {
    return (
        <div className="bg-gray-medium text-yellow-medium">
            <Head>
                <title>The Concave Spoons | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="max-w-7xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
                <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
                    <div className="">
                        <AboutDescription />
                    </div>
                    <div className="">
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About
