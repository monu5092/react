import React from 'react'
import Person from './Person'
import Test from './component/Test'
import Product from './component/Product'
import Person2 from './component/Person2'
import Person3 from './component/Person3'
import Laptop from './component/Laptop'
import Event from './component/Event'
import Counter from './component/Counter'
import ShowProduct from './component/ShowProduct'
import FilterProduct from './component/FilterProduct'

function App() {
  return (
    <>
      {/* <div><Person/> </div> */}
      {/* <div><h1>App is  Entry Point</h1></div> */}
      {/* <div><Test/> </div>*/}
      {/* <div><Product title="Galaxy S24 ultra" brand ="Samsung" price={150000} rom="128gb" ram="8gb"
       camera="64pixel" fingerPrint="Yes"</div>/> */}
      {/* <div><Product title="Galaxy M15 ultra" brand ="Samsung" price={180000} rom="128gb" ram="8gb" 
      camera="32pixel" fingerPrint="Yes"/> </div>/>*/}
      {/* <div>
        <Person2 name="Suman" age="18" salary={5000000}/>
        <Person2 name="Superman" age="118" salary ={200000}/>
        <Person2 name="Spiderman" aage="318" salary={30000}/></div> */}

      {/* <div>
        <Person3 name="Monu"  age={24} panCard={true} price={100}/></div>     */}
      
     
      {/* <div>        
           <Laptop brandName="hp" model="probook" price={150000}/>
           <Laptop brandName="lenovo" model="yoga" price={250000}/> 
           <Laptop brandName="dell" model="ispiron" price={350000}/> 
      </div> */}

      {/* <Event/> */}

      {/* <Counter/> */}
      
      {/* <ShowProduct/> */}

      <FilterProduct/>
    </>
  )
}

export default App
