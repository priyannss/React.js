import React, { useRef, useState } from 'react';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const handleStart = () => {
        if (timerRef.current) return; // prevent multiple intervals
        
        timerRef.current = setInterval(() => {
            setTime(time => time+1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const handleReset = () => {
        handleStop();
        setTime(0);
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.timer}>Time: {time} sec</h2>
            <div style={styles.buttonContainer}>
                <button onClick={handleStart} style={styles.button}>Start</button>
                <button onClick={handleStop} style={styles.button}>Stop</button>
                <button onClick={handleReset} style={styles.button}>Reset</button>
            </div>
        </div>
    );
};






const styles = {
    container: {
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1.5rem',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    timer: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1.5rem',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default StopWatch;