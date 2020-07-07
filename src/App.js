import React, { useState } from 'react';
import './App.css';
import Parent from "./parent";
import Countercontext from "./countercontext"

function App() {

   let countState = useState(1) 

  return(
    <Countercontext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </Countercontext.Provider>
  )
  
}
export default App;
