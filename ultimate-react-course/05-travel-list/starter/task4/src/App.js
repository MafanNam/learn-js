import {Fragment, useState} from "react";

function App() {

  return (
    <div>
      <TipCalculator/>
    </div>
  );
}


function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleClearInput() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 &&
        <Fragment>
          <Output bill={bill} tip={tip}/>
          <Reset onClear={handleClearInput}/>
        </Fragment>}
    </div>
  );
}

function BillInput({bill, onSetBill}) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={bill} placeholder="Bill value..."
             onChange={e => onSetBill(+e.target.value)}/>
    </div>
  );
}

function SelectPercentage({percentage, onSelect, children}) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e =>
        onSelect(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip}) {
  return (
    <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
  );
}

function Reset({onClear}) {
  return <button onClick={onClear}>Reset</button>;
}


export default App;