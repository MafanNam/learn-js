import './styles.css';
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset(e) {
    e.preventDefault();
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter">
      <div>
        <input type={"range"} min={'0'} max={'10'} value={step} onChange={(e) => setStep(+e.target.value)}/>

        <button onClick={() => setStep(s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(c => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(c => c + step)}>+</button>
      </div>

      <p>
        <span>{count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days aho was `
        }</span>
        <span>{date.toDateString()}</span>
      </p>

      {(count !== 0 || step !== 1) ?
        <div>
          <button onClick={handleReset}>Reset</button>
        </div> : null}
    </div>

  );
}

export default App;
