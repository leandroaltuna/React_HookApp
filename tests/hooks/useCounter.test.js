import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe( 'Pruebas en el useCounter', () => { 
    
    const initialValue = 100;
    let result;

    beforeEach( () => {

        const renderResult = renderHook( () => useCounter( initialValue ) );

        result = renderResult.result;

    });


    test( 'Debe retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
        
    });

    test( 'Debe generar el counter con el valor de 100', () => { 
        
        // const { result } = renderHook( () => useCounter( initialValue ) );
        const { counter } = result.current;

        expect( counter ).toBe( initialValue );
        
    });

    test( 'Debe de incrementar el contador', () => { 
        
        // const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment } = result.current;
        
        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe( initialValue + 3 );

    });

    test( 'Debe de reducir el contador', () => { 
        
        // const { result } = renderHook( () => useCounter( initialValue ) );
        const { decrement } = result.current;
        
        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe( initialValue - 3 );
        
    });
    
    test( 'Debe de resetear el contador', () => { 
        
        // const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment, reset } = result.current;
        
        act( () => {
            increment( 2 );
            reset();
        });

        expect( result.current.counter ).toBe( initialValue );
        
    });
    
});