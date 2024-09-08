import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe( 'Prueba en useForm', () => { 
    
    const initialForm = {
        name: 'Leandro',
        email: 'leandro@google.com',
    }


    test( 'Debe regresar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useForm( initialForm ) );
        
        expect( result.current ).toEqual({
            
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
              
        })
        
    });

    test( 'Debe de cambiar el nombre del formulario', () => { 

        const newValue = {
            target: {
                name: 'name',
                value: 'Juancito',
            }
        };
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange( newValue );
        });

        expect( result.current.name ).toBe( newValue.target.value );
        expect( result.current.formState.name ).toBe( newValue.target.value );
        
    });

    test( 'Debe de resetear el formulario', () => { 

        const newValue = {
            target: {
                name: 'name',
                value: 'Juancito',
            }
        };

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;
        
        act( () => {
            onInputChange( newValue );
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState ).toBe( initialForm );
        
    });
    
});