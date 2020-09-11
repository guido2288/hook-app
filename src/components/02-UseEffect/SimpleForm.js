import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

//el useEffect es un hook que nos va a permitir ejecutar algun efecto secundario, cuando algo suceda en nuestro componente
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    
    useEffect( ()=>{
        //console.log('Hola')
    }, []);

    useEffect( ()=>{
        //console.log('formState cambio')
    }, [formState]);

    //Este efecto es cuando el Email cambia 
    useEffect( ()=>{
        //console.log('email// cambio')
    }, [email]);

    const handleInputChange = ({ target }) =>{
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />    
                
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />    
                
            </div>

        {/* Lo renderizamos de manera condicional, si el nombre es 123 mostramos el mensaje  */}
        {(name === '123') && <Message/>}

        </>
    )
}
