import React from 'react';


export const ShowIncrement = React.memo( ({ increment }) => {
// export const ShowIncrement = ({ increment }) => {

    console.log( 'me volvi a generar' );

    return (
        <button
            className="btn btn-primary"
            onClick={ () => increment( 5 ) }
        >
            Incrementar
        </button>
    )

});
// };