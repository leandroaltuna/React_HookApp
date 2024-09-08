import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe( 'Prueba en <LoginPage />', () => { 
    
    test( 'Debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'preLabel' );
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test( 'Debe de llamar al setUser cuando se hace click en el boton', () => { 
        
        const user = {
            id: 321, 
            name:'Pedro', 
            email:'pedro@gmail.com'
        }

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={ { user: user, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole( 'button' );
        fireEvent.click( buttonElement );
        
        expect( setUserMock ).toHaveBeenCalledWith( user );
        // screen.debug();
    });
    
});