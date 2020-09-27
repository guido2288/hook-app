import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const ToDoAdd = ({ handleAddTodo }) => {

    //usamos el customHook de UseForm
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <=1 ) {
            return;
        }

        
        const newTodo = {
            id: new Date().getTime(),
            descripcion: description,
            done: false
        };

        //aca definimos la accion a mandar al reducer
        
        handleAddTodo(newTodo);
        reset(); 
    }

    return (
        <>
            <h4>Agregar ToDo</h4>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender..."
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                    
                </form>
        </>
    )
}
