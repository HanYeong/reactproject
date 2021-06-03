import React, { useReducer } from 'react';

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return false;
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrese = () => {
        dispatch({type:'INCREMENT'});
    }
    const onDecrese = () => {
        dispatch({type:'DECREMENT'});
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>
    );
}

export default Counter;