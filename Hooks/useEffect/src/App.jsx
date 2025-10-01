import { useEffect, useState } from 'react'
import './App.css'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeWindowComponent from './components/ResizeWindowComponent'



// first -> side-effect function
// second -> clean-up function
// third -> dependency list array


// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])




function App() {
  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(prev => prev+1);
  // }

  // Variation: 1
  // useEffect(() => {
  //   alert("I will run on every render");
  // })

  // Variation: 2
  // useEffect(() => {
  //   alert("I will run on every first render only");
  // }, [])


  // variation: 3
  // useEffect(() => {
  //   alert("I will run on each time when the listed dependency changes in ui");
  // }, [count])


  // variation: 4
  // useEffect(() => {
  //   alert("count is updated");

  //   return () => {
  //     alert("count is unmounted from the ui");
  //   }
  // }, [count])


  return (
    <>
      {/* <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div> */}

      {/* <TimerComponent /> */}
      <DataFetcher />
      {/* <ResizeWindowComponent /> */}
    </>
  )
}

export default App
