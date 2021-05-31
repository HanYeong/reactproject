import React, { useState } from 'react';

function Counter(){
    const [number, setNumber] = useState(0);

    const onIncrese = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrese = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    );
}

export default Counter;