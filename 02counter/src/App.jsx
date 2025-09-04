import React from 'react'
import { useState } from 'react';

const App = () => {
  const [counter,setCounter] = useState(0);

  const add = () =>{
    setCounter(counter + 1);
  }

  const remove = () => {
    if(counter == 0){
      setCounter(0);
    }
    else{
    setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>COUNTER : {counter} </h1>
      <button onClick={add}>ADD</button> {" "}
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default App
