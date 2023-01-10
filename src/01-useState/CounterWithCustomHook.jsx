import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter()

  return (
    <>
      <h1>Custom With Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
      <button className="btn btn-primary" onClick={reset}>reset</button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  )
}
