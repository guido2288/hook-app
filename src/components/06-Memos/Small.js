import React from 'react';

//memo es una funcion que va a regresar la forma memorizada del componente y solo se va a ejecutar si las propeties cambian
export const Small =  React.memo(({ value }) => {

    console.log("Mostrar")

    return (
        <small>
            { value }
        </small>
    )
});
