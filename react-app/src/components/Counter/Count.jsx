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
        <div className='flex justify-between items-center p-4'>
            <button className='font-bold text-6xl bg-amber-300 p-4 hover:bg-amber-700 rounded' onClick={handleIncriment}>+</button>
            <h3 className='text-6xl font-bold text-orange-800'>{count}</h3>
            <button className='font-bold text-6xl bg-amber-300 p-4 hover:bg-amber-700 rounded' onClick={handleDecriment} disabled={count <= 0}>-</button>
        </div>
    );
};

export default Count;