import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //* useCallback es un hook que actua similar al memorize pero para funciones. Siempre apunta al mismo espacio de memoria donde se registro por primera vez la funcion.
    const incrementFather = useCallback(
        
        ( valueToIncrement = 1 ) => {

            // setCounter( counter + 1 ); Este no funciona debido que el counter tambien se mantiene en memoria y no cambia su valor inicial.
            setCounter( ( value ) => value + valueToIncrement );
        },
        [],

    )

    //* Si se usa useEffect de esta manera se podria (no estoy seguro) evitar un ciclo infinito de llamar funciones de fechas.
    // useEffect(() => {
      
    //     incrementFather();

    // }, [incrementFather])
    
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallBack: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />

        </>
    )

}
