import logo from './logo.svg';
import './App.css';


/* Functional Component : Functional component reaturn Something and its return markup
         its start with capital letter
*/

function MyButton(){
  return(
    <button>Submit</button>
  ); 
}
function App() {
  return (
    <div className="App">
       <h1>Hello My name is Monu</h1>
       <MyButton/>
     </div>
  );
}

export default App;
