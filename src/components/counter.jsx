import {useState} from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => {
    setCounter(prevState => prevState+1)
  }
  const decrementCounter = () => {
    setCounter(prevState => prevState-1)
  }
  const resetCounter = () => {
    setCounter(0)
  }
  return (
    <>
      <h1>Current counter value: {counter}</h1>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
      <button onClick={resetCounter}>reset</button>
    </>
  )
}