
 export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
         case 'add': 
            return [...state, action.payload]

        case 'delete':
            return state.filter( ToDo => ToDo.id !== action.payload );   

        case 'toggle':
            return state.map( ToDo => 
                ( ToDo.id === action.payload )
                    ? {...ToDo, done: !ToDo.done}
                    : ToDo
             );
    
        default:
            return state
    }

}