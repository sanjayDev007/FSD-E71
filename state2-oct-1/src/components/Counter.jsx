import React from "react";

function Counter({ count, color, increment, decrement, reset }) {
  return (
    <div>
      {" "}
      <p className="text-4xl font-bold text-blue-600 mb-4" style={{ color }}>
        {count}
      </p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
