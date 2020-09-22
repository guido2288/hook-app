import React, { useReducer } from 'react';

import './styles.css'
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    descripcion: 'Aprender React',
    done: false
}]

export const ToDoApp = () => {


    const [toDos] = useReducer(todoReducer, initialState)


    console.log(toDos);

    return (
        <div>
            <h1>ToDoAPP</h1>
            <hr/>

            <ul>
                <li>Agregar</li>
                <li>Sacar</li>
                <li>Reemplazar</li>
            </ul>
        </div>
    )
}
