import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {
    
    const { formState, username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    return (
        <>
            <hr />
            <h1>Form with Custom Hook</h1>

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

            <input 
                type="password" 
                name="password"
                className="form-control mt-2"
                placeholder="your password"
                value={ password }
                onChange={ onInputChange }
            />
            
            <button className="btn btn-primary mt-2" onClick={ onResetForm } >Reset</button>
        </>
    )

}
