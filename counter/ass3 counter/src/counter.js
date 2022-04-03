import { useState } from "react";



export function Counter(){
  const [add,setAdd]=useState(0);

  const handleChange=(value)=>{
      setAdd(add+value)
       
  }

  return (
    <div className="App">
      <h3>count:{add}</h3>
      <button onClick= {()=>handleChange(1)}> increment</button>
    <button onClick= {()=>{
    if(add>=1){
      handleChange(-1)
    }
    }}>decrment</button>
    <button onClick= {()=>handleChange(2)}>double</button>
    </div>
    
  )
}