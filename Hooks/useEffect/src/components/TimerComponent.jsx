import React, { useState, useEffect } from 'react'

const TimerComponent = () => {
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            console.log("set interval executed");
            setSecond(prev => prev + 1);
        }, 1000)

        return () => {
            console.log("Time to stop");
            clearInterval(intervalId);
        }
    }, [isRunning]);


    const handleStop = () => {
        setIsRunning(false);
    }

    return (
        <div>
            <p>Seconds: {second}</p>
            <button onClick={handleStop}>Stop Timer</button>
        </div>
    )
}

export default TimerComponent