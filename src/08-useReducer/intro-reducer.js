

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del infinito',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {
    
    if ( action.type === '[TODO] add Todo' ) {
        state = [ ...state, action.payload ];
    }

    return state;

}

let todo = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del tiempo',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add Todo',
    payload: newTodo,
}

todo = todoReducer( todo, addTodoAction );

console.log( todo );