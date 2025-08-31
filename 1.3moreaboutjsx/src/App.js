import logo from './logo.svg';
import './App.css';

let count = 0;
var inputText = '';


function App() {

  const onIncrementClick = () =>{
    count = count+1;
    console.log({count});
  } 

  const onSearchChange = (event) =>{
    console.log(event.target.value);
    inputText = event.target.value;
  }
  return (
    <div className="App">
      <h1>JSX</h1>
      <button id='btn' onClick={onIncrementClick}>Increment</button>
      <div><input onChange={onSearchChange} placeholder='Search'/></div>
      {inputText}
    </div>
  );
}

export default App;
