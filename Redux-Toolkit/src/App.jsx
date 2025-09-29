import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./features/counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value) // here we will get the value of counter state so that we can reflect it in ui

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleReset = () => {
    dispatch(reset());
  }

  const handleIncrementValue = () => {
    const numeric = Number(amount);
    if(Number.isNaN(numeric)) {
      alert("Please enter a number");
      return;
    }
    dispatch(incrementByAmount(amount));
  }

  const handleDecrementValue = () => {
    const numeric = Number(amount);
    if(Number.isNaN(numeric)) {
      alert("Please enter a number");
      return;
    }
    dispatch(decrementByAmount(amount));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-8 bg-zinc-900 text-white">
        <div className="text-5xl">Count : {count}</div>
        <div className="flex gap-2">
          <button onClick={handleIncrement} className="border border-sky-600 py-2 px-6 rounded-full text-blue-400 hover:scale-105 hover:bg-white transition duration-300 cursor-pointer">+</button>
          <button onClick={handleDecrement} className="border border-sky-600 py-2 px-6 rounded-full text-blue-400 hover:scale-105 hover:bg-white transition duration-300 cursor-pointer">-</button>
          <button onClick={handleReset} className="border border-sky-600 py-2 px-6 rounded-full text-blue-400 hover:scale-105 hover:bg-white transition duration-300 cursor-pointer">Reset</button>
        </div>
        <div className="flex flex-col gap-2">
          <input type="number" value={amount} placeholder="Increment by value" onChange={(e) => setAmount(e.target.value)} className="border py-2 px-4 border-sky-600 rounded-full" />
          <div className="flex gap-2">
            <button onClick={handleIncrementValue} className="border border-sky-600 py-2 px-6 rounded-full text-blue-400 hover:scale-105 hover:bg-white transition duration-300 cursor-pointer">Increment by amount</button>
            <button onClick={handleDecrementValue} className="border border-sky-600 py-2 px-6 rounded-full text-blue-400 hover:scale-105 hover:bg-white transition duration-300 cursor-pointer">Decrement by amount</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
