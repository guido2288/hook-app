import React, { useState } from 'react'
import '../02-UseEffect/effect.css'
import { MultipleCustomHook } from '../03-Examples/MultipleCustomHook'

export const RealExampleUseRef = () => {

    const [show, setShow] = useState(false)

    //renderizar un componente de manera condicional
    return (
        <div>
            <h1>RealExampleUseRef</h1>
            <hr/>

            {show && <MultipleCustomHook />}

            <button
                className="btn btn-primary mt-5"
                onClick={ () =>{
                    setShow( !show);
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
