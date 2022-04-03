import { useState } from "react";
import {Groceryinput} from "./groceryinput"
import {Grocerylist} from "./grocerylist";

export const Grocery=()=>{
 const [grocer,setGrocery] = useState([]);

 const addgrocery=(data)=>{
   setGrocery([...grocer,data]);
 }

  return (
    <div>
      <Groceryinput />
      {grocer.map((e)=>(
        {<Grocerylist grocerys={e} />
        ))}
    </div>
  );
}

