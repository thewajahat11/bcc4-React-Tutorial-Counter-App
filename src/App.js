import React, {useState} from 'react';
import './App.css';
import { Message } from './Message';

export default function App() {

  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(true)

  return (
    <div className="App-header">
      <h1>Time = {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}/>
      <br />
      <button onClick={
          ()=> setCount(count + 1)
        }>
          Update Counter
        </button>

        <button onClick={()=>setMorning(!isMorning)}>Update Time</button>
    </div>
  );
}

