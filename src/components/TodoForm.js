import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import { initialState, reducer } from '../reducers/todoReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log('TODOFORM STATE: ', state)
    const [inputText, setInputText] = useState('')

    const handleChanges = event => {
        setInputText(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: inputText })
        setInputText('')
    }

    const clearForm = event => {
        event.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED', payload: state})
    }

    return (
        <div>
            <Todo state={state} dispatch={dispatch}/>
            <form>
                <label htmlFor='todo'>Enter Todo Item: </label>
                <input 
                id='todo'
                type='text'
                name='todo'
                value={inputText}
                onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={clearForm}>Clear Completed</button>
            </form>
    
        </div>
    )
}

export default TodoForm;