import { useState } from "react"


export const useCounter = (initialState = 10) => {

    const [state, setState] = useState( initialState ); //por Defecto el valor va a ser 10

    const increment = ( factor= 1 ) => {
        setState( state + factor);
    }


    const decrement = ( factor= 1 ) => {
        setState( state - factor );
    }

    const reset = (  ) => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}
