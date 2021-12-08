function CountdownTimerHelper({ value, unit }) {
    return (
        <div>
            <div className="space-y-4">
                <div className="relative h-36 w-36 bg-darkest-blue rounded-lg">
                    <div className="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
                        <div className="h-full flex flex-col justify-between space-y-px">
                            <div className="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
                            <div className="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
                        <span className="text-yellow-medium font-bold text-6xl">{value}</span>
                    </div>
                </div>

                <div className="justify-self-center text-center">
                    <span className="uppercase text-sm text-yellow-medium font-bold tracking-4xl">{unit}</span>
                </div>
            </div>
        </div>
    )
}

export default CountdownTimerHelper
