import { useState } from "react"

export const useCounter = (initialValue = 1) =>{
    
    const [counter, setCounter] = useState(initialValue)

    const increment = (value) => setCounter(counter + 1)
    const decrement = (value) => {
        if( counter === 0) return 
        setCounter(counter - 1)   
    }
    const reset = () => setCounter(initialValue)


    return {
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset
    }

}