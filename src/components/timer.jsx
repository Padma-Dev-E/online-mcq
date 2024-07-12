import Countdown from "react-countdown";
import {useCallback} from "react";

const TimerContent = ({time, unit}) => {
    return (
        <div className="mr-2 rounded  shadow-md text-center border border-zinc-950/10 dark:border-white/10">
            <div className="text-l m-0 font-bold ">
                {" "}
                {time}
            </div>
            <div className="text-white text-sm mt-0 bg-primary px-1">
                {unit}
            </div>
        </div>
    );
};
const TimeIndicator = ({time = 0, onComplete}) => {
    const renderer = useCallback(({minutes, seconds}) => {
        return (
            <div className={`flex`}>
                <TimerContent time={minutes} unit="minutes"/>
                <TimerContent time={seconds} unit="seconds"/>
            </div>
        );
    }, []);
    return (
        <Countdown
            date={Date.now() + time * 60 * 1000}
            renderer={renderer}
            onComplete={onComplete}
        />
    );
};
export default TimeIndicator;