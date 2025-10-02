import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import StopWatch from './components/StopWatch';

// we generally use useRef for those variable which wants to persist its value even after re render
// usearef return an object


// useRef is used when you want to hold a value that persists across renders but doesn’t trigger re-renders when it changes.

function App() {
  const [count, setCount] = useState(0);

  // Case 1 -> 


  // let val = 0;
  let val = useRef(0); // instead store it in useRef // now this val is a object
  // now val will persist its value even after re-rendering the page
  // Important:  When useRef variable changes it does not re-render the ui unlike other hooks
  // you can see that by commenting setCount() in handleClick method

  function handleClick() {
    // val = val + 1;
    // console.log(val); // when using let val = 0; -> you will see that val is not increasing it is just showing 1 cause on each render val is again becoming 0
    // so if we wnat to persist its value use useRef
    val.current += 1;
    console.log(val.current);
    
    setCount(prev => prev+1);
  }


  useEffect(() => {
    console.log("I will run on each render");
  })





  // Case 2 ->


  let btnRef = useRef(); // by doing so you don not need to access it by traditional method

  const changeColor = () => {
    // btnRef.current.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    btnRef.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // it will change the color of button without even re-rendering the page
  }



  return (
    <>
      {/* <h2>Count : {count}</h2>

      <button ref={btnRef} onClick={handleClick} >Increment</button>

      <br />
      <br />


      <button onClick={changeColor} >Change color of first button</button> */}



      {/* Mini project StopWatch */}
      <StopWatch />
    </>
  )
}

export default App
