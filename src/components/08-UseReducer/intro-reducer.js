
//1. definimos el estado inicial
//2. definimos el reducer (simple funcion que recibe el estado y la accion)

const initialState = [{
    id:1,
    toDo: 'Comprar Pan',
    done: false
}];

//Creamos el reducer (las acciones son las que van a modificar el state), por defecto SIEMPRE se retorna un State
const toDoReducer = ( state= initialState , action)=>{

    //aca procesamos el "agregar"
    if( action?.type === 'agregar') {
        return [...state, action.payload ];
    }


    return state;
}

let toDos = toDoReducer();

//como añadir un nuevo elemento al initialState
const newToDo = {
    id:2,
    toDo: 'Comprar Leche',
    done: false
};
//hay que crear una accion, el type le va a decir al reducer que tipo de accion es
const agregarTodoAction = {
    type: 'agregar',
    payload: newToDo
}

 toDos = toDoReducer(toDos, agregarTodoAction);

console.log(toDos);
