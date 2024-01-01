import React, { useState,useEffect } from 'react';

const Counter = () => {
    const [ count,setCount ] = useState(0);

    useEffect(() => {
        console.log('Count:', count);
    },[count]);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    }
    
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default Counter;