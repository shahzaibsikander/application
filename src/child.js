import React, { useContext } from "react";
import countercontext from "./countercontext";


function child (){

    let counterValue = useContext(countercontext) 

       return(
           <div>
               <h1>The counter value is: {counterValue[0]}</h1>
               <button onClick={()=>{counterValue[1](++counterValue[0])}}>inc</button>
           </div>
       )

}
export default child;