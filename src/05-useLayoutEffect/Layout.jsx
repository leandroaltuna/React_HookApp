import { useFetch } from '../hooks';
import { LoadingMessage, Quote } from '../03-examples';


export const Layout = () => {
    
    const { data, isLoading, hasError, reloadingFetch } = useFetch( 'https://api.breakingbadquotes.xyz/v1/quotes' );

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breakin Bad Quotes</h1>
            <hr />

            { 
                (isLoading) ? 
                <LoadingMessage /> : 
                <Quote author={ author } quote={ quote } />
            }
            
            {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}

            <button 
                className='btn btn-primary mt-2'
                onClick={ reloadingFetch }
            >
                Next Quote
            </button>
        </>
    )

}