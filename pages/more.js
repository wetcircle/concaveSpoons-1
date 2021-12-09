import AboutDescription from '../components/AboutDescription'
import HeaderBack from '../components/HeaderBack'
import TeamTable from '../components/TeamTable'

function more() {
    return (
        <div className="bg-gray-medium text-yellow-medium">
            <HeaderBack />
            <main className="mt-20 max-w-9xl mx-auto px-8 md:px-16 h-800px md:h-[1100px]">
                <section className="pt-6 mt-20 grid grid-cols-1 lg:grid-cols-2 md:space-x-10 gap-y-10">
                    <div className="">
                        <AboutDescription />
                    </div>
                    <div className="">
                        <TeamTable />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default more
