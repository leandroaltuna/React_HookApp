import React, { memo } from 'react'


export const Small = React.memo(({ value }) => {

    console.log( 'dibujando again');

    return (
        <small>{ value }</small>
    )

});