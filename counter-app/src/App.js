import React,{useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  //setCount is use to change the state of default state 
  return (
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Current Value of count is {count}</h2>
      {/* <button onClick={()=>setCount(0)}>Reset Count</button>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <button onClick={()=>setCount(count-1)}>Decrease Count</button> */}

      <button onClick={()=>setCount(0)}>Reset Count</button>
      <button onClick={()=>count>9 ? "": setCount(count+1)}>Increase Count</button>
      <button onClick={()=>count===0 ? "": setCount(count-1)}>Decrease Count</button>
    </div>
  );
}

export default App;
