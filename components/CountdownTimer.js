import React from 'react'
import CountdownTimerHelper from './CountdownTimerHelper';

const CountDownTimer = ({ hoursMinSecs }) => {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);


    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
    //     <div>
    //         <p>{`${hrs.toString().padStart(2, '0')}:${mins
    //         .toString()
    //         .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
    //     </div>
        <div className="grid grid-cols-2 auto-rows-max gap-8 md:grid-cols-4">
            <CountdownTimerHelper value={10} unit="DAYS" />
            <CountdownTimerHelper value={hrs.toString().padStart(2, '0')} unit="HOURS" />
            <CountdownTimerHelper value={mins.toString().padStart(2, '0')} unit="MINUTES" />
            <CountdownTimerHelper value={secs.toString().padStart(2, '0')} unit="SECONDS" />
        </div>
    );
}

export default CountDownTimer;