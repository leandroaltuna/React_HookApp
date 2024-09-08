import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const LoginPage = () => {
   
    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <div>LoginPage</div>
            
            <pre aria-label="preLabel">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => setUser({ id: 321, name:'Pedro', email:'pedro@gmail.com' }) }
            >
                Establecer usuario
            </button>
        </>
    )

}