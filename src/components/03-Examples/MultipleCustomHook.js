import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-UseEffect/effect.css';

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);

    const {loading, data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
   
    //si viene la data entonces extrae la data en la posicion 0
    const { author, quote } = !!data && data[0];
    


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>


            {

                loading?(
                    <div className="alert alert-info text-center">Loading...</div>

                ):(
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer"> {author}</footer>
                    </blockquote>
                )
            } 

            <button className="btn btn-primary" onClick={increment}>
                Next
            </button>
        </div>
    )
}
