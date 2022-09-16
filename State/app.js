import React, {useState} from 'react';
import 'App.css';

function App(){
    const [counter,setCounter]=useState(0);
    function incrementCounterHandler(){
        setCounter((prevCounter)=>prevCounter+1);
    }
    return(
        <main className='app'>
            <p>{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>       
         </main>
    );
}
export default App;