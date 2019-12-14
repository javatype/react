import React, { useState } from "react";
//import './../style.scss';
import CardApp from './CardApp.js';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <CardApp title="card App"/>
    </div>
  );
}
//const update=(propX, a, b) => { alert(this)};

