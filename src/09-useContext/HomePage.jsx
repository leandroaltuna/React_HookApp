import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const HomePage = () => {
   
    const { user } = useContext( UserContext );

    return (
        <>
            <div>HomePage <small>{ user?.name }</small></div>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )

}