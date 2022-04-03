import { useState } from "react";



export const Groceryinput=()=>{
  const[text,setText]=useState([]);

  return( <div >
    {text}
    <input type="text" onChange={(e)=>{
      setText(e.target.value)
    }} />

    <button onClick={()=>{
      addgrocery(text);
    }}> Add  </button>
    <button> Delete </button>
  </div>);
};