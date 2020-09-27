import React from 'react';
import { TodoListItem } from './TodoListItem';

export const ToDoList = ({ toDos, handleDelete, handleToggle}) => {
    return (


    <ul className="list-group list-group-flush">
        {
            toDos.map( (toDos , i) => (
            <TodoListItem 
                key={ toDos.id }
                toDos={ toDos }
                index={ i }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
                
            />
            ))
                }
    </ul>
    )
}