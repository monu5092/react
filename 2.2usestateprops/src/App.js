import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const IncrementButton = (props) => {
  const onIncrementClick = () => {
    props.setCount (props.count+1);
  }

   return (
    <button onClick={onIncrementClick}>Increment</button>
  )
} 


const DecremetButton = (props) => {
  const onDecrementClick = () => {
    props.setCount (props.count-1);
  } 
  
  return (
    <button onClick={onDecrementClick}>Decremnt</button>
  )
}

function App() {
   const [count,setCount] = useState(101);
   //props -- props is used to pass data from parent component to child component

  return (
    <>
    <IncrementButton count={count} setCount={setCount}/>
    <span>The value is {count}</span>
     <DecremetButton count={count}  setCount={setCount}/>
    </>
  );
}

export default App;
