import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';


jest.mock( '../../src/hooks/useFetch' );
jest.mock( '../../src/hooks/useCounter' );


describe( 'Prueba en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({ 
        counter: 1, 
        increment: mockIncrement,
    });

    beforeEach( () => {

        jest.clearAllMocks();

    });
    
    test( 'Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null ,
            isLoading: true,
            hasError: false,
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText( 'Información de Pokémon' ) );
        expect( screen.getByText( 'Cargando...' ) );

        const nextButton = screen.getByRole( 'button', { name: 'Siguiente' } ); 
        expect( nextButton.disabled ).toBeFalsy();

    });

    test( 'Debe de mostrar pokemon', () => { 
        
        useFetch.mockReturnValue({
            data: {
                name: 'Pikachu',
                sprites: {
                    front_default: 'Imagen de front Pikachu',
                    front_shiny: 'Imagen de front shiny Pikachu',
                    back_default: 'Imagen de back Pikachu',
                    back_shiny: 'Imagen de back shiny Pikachu',
                }
            },
            isLoading: false,
            hasError: false,
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        expect( screen.getByText( '#1 - Pikachu' ) ).toBeTruthy();

        const imgPokemon = screen.getAllByRole( 'img' );
        expect( imgPokemon.length ).toBe( 4 );
        
    });

    test( 'Debe de llamar a la funcion incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: null ,
            isLoading: true,
            hasError: false,
        });
        
        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole( 'button', { name: 'Siguiente' } ); 

        fireEvent.click( nextButton );
        expect( mockIncrement ).toHaveBeenCalled();
        
    });
    
});