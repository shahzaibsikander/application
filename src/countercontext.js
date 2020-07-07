import React, { createContext } from "react";

 
function counterContext (){
    return(
        createContext(5)
    )
}


export default counterContext;