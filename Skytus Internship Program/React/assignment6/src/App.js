import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  return (
    <div className="app">
      <div className="counter-card">
        <h1>Counter App</h1>

        <p className="count">{count}</p>

        {/* Buttons */}
        <div className="buttons">
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrease
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>
        </div>

        {/* Conditional Rendering */}
        {count > LIMIT && (
          <p className="warning">
            ⚠ Counter value exceeded the limit!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
