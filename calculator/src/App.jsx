import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(0)


  const calculator = useCallback((num1, num2) => {
    const ans = Number(num1) + Number(num2);
    
     setSum(ans)
     return ans
    
  },[]);
  return (
    <>
     <div>
      <h1>Sum:{sum}</h1>
      <label htmlFor="num1">Num1:-</label>
      <input 
        label="Num1"
        type="number"
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
        placeholder='Enter the num1:'
        style={{ backgroundColor: 'white' }} 
      />
      <label htmlFor="num2">Num2:-</label>
      <input 
         type="number"
         value={num2}
         onChange={(e)=>setNum2(e.target.value)}
         placeholder='Enter the num2: '
         style={{ backgroundColor: 'white' }} 
      />
      <button 
        style={{ backgroundColor: 'blue',color:'white'}} 
      onClick={()=>calculator(num1,num2)}>Calculate</button>
     </div>
    </>
  )
}

export default App
