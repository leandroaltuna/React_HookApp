import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ author, quote }) => {
 
    //* Hook para obtener la referencia de un elemento.
    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    //* Hook similar al useEffect
    useLayoutEffect(() => {
      
        // console.log( pRef.current.getBoundingClientRect() );
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    
    }, [quote]) // Se dispara cada vez que el quote cambie

    return (
        <>
            <blockquote
                className="blockquote"
                style={{ display:'flex' }}
            >
                <p ref={ pRef } className="mb-1" >{ quote }</p>
            </blockquote>
            <figcaption>
                <footer className="blockquote-footer" >{ author }</footer>
            </figcaption>
            <code>{ JSON.stringify( boxSize ) }</code>
        </>
    )

}
