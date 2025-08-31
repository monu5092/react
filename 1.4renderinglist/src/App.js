import logo from './logo.svg';
import './App.css';

const products = [{id:"1",item:"shirt"},{id:'2',item:'paint'},{id:"3",item:'jacket'},
  {id:'4',item:'Trouser'},{id:'5',item:'T-shirt'}];

function App() {
  return (
   <>
     <h1>Hello and Welcome</h1>
     <ul>
      {
        products.map(product =>{

          <li key={product.id}>{product.item}</li>
        })
      }
     </ul>
   </>
  );
}

export default App;
