import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( );

    return (
        <>
            <h1>Counter With Hook: { state }</h1>
            <hr/>

            <button onClick={ () => increment(2) } className="btn btn-success"> +1 </button>
            <button onClick={ () => decrement(2) } className="btn btn-danger"> -1 </button>
            <button onClick={ reset } className="btn btn-info"> Reset </button>
        </>
    )
}
