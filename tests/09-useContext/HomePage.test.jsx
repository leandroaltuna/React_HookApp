import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe( 'Pruebas en <HomePage />', () => { 
    
    const user = {
        id: 1,
        name: 'Leandro',
    }

    test( 'Debe de mostrar el componente SIN el usuario', () => { 
        
        render(
            <UserContext.Provider value={ { user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'preLabel' );
        expect( preTag.innerHTML ).toBe( 'null' );

        // screen.debug();
        
    });
    
    test( 'Debe de mostrar el componente CON el usuario', () => { 
        
        render(
            <UserContext.Provider value={ { user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'preLabel' );
        expect(  JSON.parse( preTag.innerHTML ) ).toEqual( user );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${ user.id }` );
        
        // console.log( preTag.innerHTML );
        // screen.debug();
        
    });
    
});