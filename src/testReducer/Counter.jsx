import { useReducer, useState } from "react";
import { stateReducer } from "./stateReducer";


const initialState = {
      count:0,
      countInterval:1,
      increment:true
}

export const Counter = ()=>{
    //Declaración
    //const [state, dispatch] = useReducer(()=>{},{});

    const [countNumber, setCountNumber] = useState({
      count:0,
      countInterval:1,
      increment:true
    })

    const {count, countInterval, increment} = countNumber

    const [state, dispatch] = useReducer(stateReducer,initialState);

    
  
    const handleIncrement = (e)=>{
      const {checked}=e.target;
      setCountNumber({
        ...countNumber,
        increment: checked
      })
    }
    const handleCountInterval = (e)=>{
      const {value}=e.target;
      console.log(typeof value)
      setCountNumber({
        ...countNumber,
        countInterval: parseInt(value)
      }) 
    }
    const handleCount = (e)=>{
       if(increment){
         setCountNumber({
           ...countNumber,
           count: count + countInterval
         })
       }else{
         setCountNumber({
           ...countNumber,
           count: count -  countInterval
         })
       }
    }
    const handleRestart = (e)=>{
      setCountNumber(initialState)
    }
    return(
      <div className="padre">
        <h1>{"Hook useReducer by EWebik"}</h1>
        <p>{"Cuenta: " + count}</p>
        <div>
          <input
            type="checkbox"
            id="chk"
            checked={increment}
            onChange={handleIncrement} />
          <label htmlFor="chk">
            {"Incrementar"}
          </label>
        </div>
        <br/>
        <div>
          <label htmlFor="interval">
            {"Intervalo"}
          </label>
          <input
            type="number"
            id="interval"
            value={countInterval}
            onChange={handleCountInterval} />
        </div>
        <br/>
        <button onClick={handleCount}>
          {increment ? "Incrementar":"Decrementar"}
        </button>
        <button onClick={handleRestart}>
          {"Reiniciar"}
        </button>
      </div>
    )
  }
