import React, { useEffect, useReducer } from 'react';
import { ToDoAdd } from './components/ToDoAdd';
import { ToDoList } from './components/ToDoList';

import './styles.css'
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('Todos')) || [];
}

export const ToDoApp = () => {

    const [toDos , dispatch] = useReducer(todoReducer, [], init);

    useEffect( ()=>{
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos]);


    const handleDelete = ( todoId ) => {



        dispatch({
            type: 'delete',
            payload: todoId
        });
    };

    const handleToggle = ( todoId)=>{
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) =>{

        dispatch({ 
            type: 'add', 
            payload: newTodo
        });
    }




    return (
        <div>
            <h1>ToDoAPP ({toDos.length})</h1>
            <hr/>

          
        <div className="row">

            <div className="col-7">

            {/* Todo List, toDos, handleToggle, handleDelete */}
            <ToDoList 
                toDos={toDos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />
            

            </div>

            <div className="col-5">
                
                <ToDoAdd handleAddTodo={ handleAddTodo } />

            </div>

        </div>

        </div>
    )
}
