import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)

    const handleIncriment = () => {
        setCount(count + 1)
    }

    const handleDecriment = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleIncriment}>+</button>
            <button onClick={handleDecriment} disabled={count <= 0}>-</button>
        </div>
    );
};

export default Count;