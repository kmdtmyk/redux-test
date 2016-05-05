
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'



let initialState = {
    visibilityFilter : 'SHOW_ALL',
    todos: [
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: false,
        },
    ]
};


function todoApp(state = initialState, action){
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case 'COMPLETE_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index),
                    Object.assign({}, state.todos[action.index], {
                        completed: true
                    }),
                    ...state.todos.slice(action.index + 1)
                ]
            });
        default:
            return state;
    }
}





// class Counter extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.value}</h1>
//                 <button onClick={this.props.onIncrement}>+</button>
//                 <button onClick={this.props.onDecrement}>-</button>
//             </div>
//         )
//     }
// }
//
//
//
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }




// const store = createStore(counter)
//
//
// render(
//     <Provider store={store}>
//         <Counter
//             value={store.getState()}
//             onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
//             onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
//             >
//         </Counter>
//     </Provider>,
//     document.getElementById('root')
// )

// const render = () => {
//     ReactDOM.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
//             onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
//         />,
//         document.getElementById('root')
//     )
// }
//
// store.subscribe(render)
//
// render()
