import { useState } from "react"


export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState( initialState ); //por Defecto el valor va a ser 10

    const increment = (  ) => {
        setCounter( counter + 1 );
    }


    const decrement = (  ) => {
        setCounter( counter - 1 );
    }

    const reset = (  ) => {
        setCounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
