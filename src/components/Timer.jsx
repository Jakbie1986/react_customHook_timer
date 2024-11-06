import useTimer from "../hooks/useTimer";

const Timer = () => {

    const {timerValue, timerIsRunning, startTimer, stopTimer, resetTimer} = useTimer({});
    return (
        <>

            <span>{timerValue}</span>
            <div>
                <button onClick={startTimer} disabled={timerIsRunning}>Start</button>
                <button onClick={stopTimer} disabled={!timerIsRunning}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </>
    )
}

export default Timer;