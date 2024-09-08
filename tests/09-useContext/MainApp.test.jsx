import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';


describe( 'Prueba en <MainApp />', () => { 
    
    test( 'Debe de mostrar el HomePage', () => { 
        
        render(
            //* El <MemoryRouter /> se utiliza en test para reemplazar el <BrowserRouter />. Asi es como esta definido en el main.jsx ya que es de donde se llama el MainApp.
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();
        // screen.debug();
        
    });

    test( 'Debe de mostrar el LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={[ '/login' ]} >
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();
        // screen.debug();
        
    });
    
});