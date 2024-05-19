
import { useState } from 'react';


import './App.css'

function App() {
  let [haseeb,waseema]=useState(15);
  
  const addValue=()=>{
    haseeb=haseeb+1
    waseema(haseeb)
  }
  const removeValue=()=>{
    haseeb=haseeb-1
    waseema(haseeb)
  }
 
  return (
    <>
     <h1>Chai aur Code</h1>
       <h2>Counter value:{haseeb}</h2>
       <button onClick={addValue}>Add value</button>
       <br />
       <button onClick={removeValue}>remove value</button>
  
    </>
  )
}

export default App
