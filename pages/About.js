import Header from "../components/Header";
import AboutDescription from "../components/AboutDescription";
//import TeamTable from "../components/TeamTable";

function About() {
    return (
        <div className="bg-gray-medium text-yellow-medium">
            <Header />
            <main className="max-w-7xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
                <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
                    <div className="">
                        <AboutDescription />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About
