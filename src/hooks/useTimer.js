import { useState } from "react";

const useTimer = ({timeValue = 0, timeInterval = 1, value = 1}) => {

    const [time, setTime] = useState(timeValue);
    const [intervalId, setIntervalId] = useState(null);
    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [timerValue, setTimerValue] = useState();


    const startTimer = () =>{
        setTimerIsRunning(true);
        setIntervalId(setInterval(() => {
            setTime(prev => {
                let minutes = Math.floor((prev + value)/60).toString();
                let seconds = (prev + value - Math.floor((prev + value)/60)*60).toString() 

                setTimerValue(`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
                return prev + value;
            });
        }, timeInterval * 1000));
    }

    const stopTimer = () => {
        setTimerIsRunning(false);
        clearInterval(intervalId);
    }

    const resetTimer = () => {
        setTime(0);
    }

    return {
        timerValue,
        timerIsRunning,
        startTimer,
        stopTimer,
        resetTimer
    }
}

export default useTimer;