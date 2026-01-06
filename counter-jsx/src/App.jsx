import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <h1 className="title">Counter {count}</h1>

      <div className="btn-group">
       
        <button
          disabled={count >= 20 ? true : false}
          onClick={() => setCount(count + 1)}
          className="btn increment"
        >
          Increment
        </button>

        
        <button
          disabled={count <= 0 ? true : false}
          onClick={() => setCount(count - 1)}
          className="btn decrement"
        >
          Decrement
        </button>
      </div>

    </div>
  );
};

export default App;
