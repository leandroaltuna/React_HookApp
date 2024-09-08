import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';


describe( 'Pruebas en <TodoItem />', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del infinito',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test( 'Debe de mostrar el TODO Pendiente', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const listElement = screen.getByRole( 'listitem' );
        expect( listElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText( 'spanLabel' );
        expect( spanElement.className ).toContain( 'align-self-center' );
        expect( spanElement.className ).not.toContain( 'text-decoration-line-through' );
        
    });

    test( 'Debe de mostrar el TODO Completado', () => { 
        
        /* todo.done = true; */

        render( 
            <TodoItem 
                todo={ { ...todo, done: true } } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );
        
        const spanElement = screen.getByLabelText( 'spanLabel' );
        expect( spanElement.className ).toContain( 'text-decoration-line-through' );
        
    });

    test( 'Span debe de llamar el ToggleTodo cuando se hace click', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText( 'spanLabel' );
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

    test( 'Button debe de llamar el DeleteTodo cuando se hace click', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const buttonElement = screen.getByRole( 'button' );
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

        // screen.debug();
        
    });
    
});