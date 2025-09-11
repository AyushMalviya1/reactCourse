import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(1);

  const addValue = ()=> {
    if(counter<20){
    counter = counter +1
    console.log(counter);
    setCounter(counter);
    }
  }

  const removeValue = ()=>{
    if(counter > 0){
    counter = counter -1;
    setCounter(counter)
    console.log(counter); 
    }
  }
  return (
    <>
      <h1>React with Ayush</h1>
      <h2>Count value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
