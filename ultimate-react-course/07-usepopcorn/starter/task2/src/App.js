// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import {useEffect, useState} from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [cur1, setCur1] = useState('EUR');
  const [cur2, setCur2] = useState('USD');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function convert() {
      setIsLoading(true);

      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${cur1}&to=${cur2}`);
      const data = await res.json();
      setResult(data.rates[cur2]);
      setIsLoading(false);
    }

    if (cur1 === cur2) return setResult(amount);
    convert();
  }, [cur1, cur2, amount]);

  return (
    <div>
      <input type="text"
             onChange={e => setAmount(+e.target.value)} value={amount}/>
      <select value={cur1}
              onChange={e => setCur1(e.target.value)}
              disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={cur2}
              onChange={e => setCur2(e.target.value)}
              disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      {isLoading ? <p>Loading...</p> :
        <p>{result} {cur2}</p>}
    </div>
  );
}
