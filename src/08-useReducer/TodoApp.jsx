import { TodoAdd, TodoList } from './components';
import { useTodo } from '../hooks';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();


    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo } 
                    />
                    {/* <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">Item 1</span>
                            <button className="btn btn-danger"> - </button>
                        </li>
                    </ul> */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ handleNewTodo } 
                    />
                    {/* <form>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Que hay que hacer?"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form> */}
                </div>
            </div>

        </>
    )
    
}
