import React, {useState} from 'react';

import './App.css';
// import Myintro from './intro.js';

function App() {
  let [count,setCount] = useState(1);

  return (
    <div>
      <h3>the value of counter is {count}</h3>
      <button onClick ={
        ()=> setCount(2)
      }>
        update counter
        </button>
    </div>
  )
}

export default App;
