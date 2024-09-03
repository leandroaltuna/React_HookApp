import { useEffect } from "react"


export const Message = () => {
  
    useEffect(() => {
        
        //* { x, y } se destructura del event que viene del mousemove.
        const onMouseMove = ({ x, y }) => {
            
            const coords = { x, y };
            console.log( coords );

        }

        window.addEventListener( 'mousemove', onMouseMove );
        
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
        }

    }, []);
    
    return (
        <>
            <h3>User already exist!</h3>
        </>
    )

}
