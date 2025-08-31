import logo from './logo.svg';
import './App.css';

// jsx - syntax Extension of the JavaScript

const name =  "Monu";
const element = <h2>I am awesome</h2>

// React is declarative by narure
// JavaScript is imperative by nature

function App() {
  return (
    <>
     <dv classname="App">
       <h1>Hello My name is {name}</h1>
       {element}
     </dv>
     <div>
        <p>I am a Student of the Full stack JavaDeveloper</p>
     </div>
    </>
  );
}

export default App;
