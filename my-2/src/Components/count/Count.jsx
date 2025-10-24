import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center w-3/4 border border-b-4 border-amber-400 p-4 mx-auto h-2/4 rounded">
      <button
        disabled={count === 5}
        onClick={() => setCount(count + 1)}
        className="border border-b-2 border-amber-600 p-2 rounded disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
      >
        Increment
      </button>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-bold text-red-500">{count}</h2>
        <button
          onClick={() => setCount(0)}
          className="border border-b-2 border-amber-600 p-2 rounded"
        >
          Reset
        </button>
      </div>
      <button
        disabled={count === -5}
        onClick={() => setCount(count - 1)}
        className="border border-b-2 border-amber-600 p-2 rounded disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
