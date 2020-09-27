import React from 'react'

export const TodoListItem = ({toDos, index, handleDelete, handleToggle}) => {


    return (
        <li 
                key={toDos.id}
                className="list-group-item"
            >
            <p 
                className={ `${ toDos.done && 'complete' }` }
                onClick={()=>handleToggle(toDos.id)}    
            > { index + 1}. { toDos.descripcion } </p>
            <button 
                className="btn btn-danger"
                onClick={ () =>handleDelete (toDos.id)}
            >
                Borrar
            </button>
        </li>
    )
}
