import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let count = 0;
//hooks Always declare in inside the functional component

function App() {
    
  const [count,setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count+1);
  }
  const onDecrementClick = () => {
    setCount(count-1);
  }
  
  // Batch Update
  // const onIncrementClick = () => {
  //   setCount((prevCount)=>{
  //     return prevCount+1;
  //   });
  //   setCount((prevCount=> prevCount+1));
  //   setCount((prevCount => prevCount+1));
  // }

  return (
    <>
      <h1>JSX</h1>
      <button onClick={onIncrementClick}>Increament</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <h2>This is the value: {count}</h2>

    </>
  );
}

export default App;
