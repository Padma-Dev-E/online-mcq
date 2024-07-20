import Countdown from "react-countdown";
import {useCallback} from "react";

const TimerContent = ({time, unit}) => {
    return (
        <div className="mr-2 rounded shadow-md text-center border border-zinc-950/10 dark:border-white/10">
            <div className="text-l m-0 font-bold text-white">
                {time}
            </div>
            <div className="text-white text-sm mt-0 bg-primary px-1">
                {unit}
            </div>
        </div>
    );
};

const TimeIndicator = ({time = 0, onComplete}) => {
    const renderer = useCallback(({days, hours, minutes, seconds}) => {
        return (
            <div className="flex">
                {days > 0 &&
                    <TimerContent time={days} unit="days"/>
                }
                {hours > 0 &&
                    <TimerContent time={hours} unit="hours"/>
                }
                {minutes >= 0 &&
                    <TimerContent time={minutes} unit="minutes"/>
                }
                {seconds >= 0 &&
                    <TimerContent time={seconds} unit="seconds"/>
                }
            </div>
        );
    }, []);

    return (
        <Countdown
            overtime={true}
            date={Date.now() + time * 60 * 1000}
            renderer={renderer}
            onComplete={onComplete}
        />
    );
};

export default TimeIndicator;
