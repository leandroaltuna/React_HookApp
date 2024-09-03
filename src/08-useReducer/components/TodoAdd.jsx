import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ onNewTodo }) => {
    
    const { description, onInputChange, onResetForm } = useForm({ description: '' });

    const onFormSubmit = ( event ) => {
        
        event.preventDefault();

        if ( description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        onNewTodo( newTodo );

        onResetForm();

    }


    return (
        <>
            <form onSubmit={ onFormSubmit } >
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Que hay que hacer?"
                    // value={ inputValue }
                    // onChange={ onTextChanged }
                    name="description"
                    value={ description }
                    onChange={ ( event ) => onInputChange( event ) }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
