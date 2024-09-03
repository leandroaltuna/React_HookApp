import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'chezna',
        email: 'leandro@google.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });

    };

    useEffect(() => {
    //   console.log( 'useEffect called' );
    }, []);

    useEffect(() => {
    //   console.log( 'formState changed' );
    }, [ formState ]);

    useEffect(() => {
    //   console.log( 'email changed' );
    }, [ email ]);
    

    return (
        <>
            <hr />
            <h1>Simple Form</h1>

            <input 
                type="text" 
                name="username"
                className="form-control"
                placeholder="Username"
                value={ username }
                onChange={ ( event ) => onInputChange( event ) }
            />
            
            <input 
                type="text" 
                name="email"
                className="form-control mt-2"
                placeholder="kuraqchuri@gmail.com"
                value={ email }
                onChange={ onInputChange }
            />
            {
                ( username === 'chezna2' ) && <Message />
            }
        </>
    )

}
