
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import App from './App'



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




function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ];
        case 'COMPLETE_TODO':
            return [
                    ...state.todos.slice(0, action.index),
                    Object.assign({}, state.todos[action.index], {
                        completed: true
                    }),
                    ...state.todos.slice(action.index + 1)
                ];
        default:
            return state;
    }
}



function visibilityFilter(state = 'SHOW_ALL', action){
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state;
    }
}


const todoApp = combineReducers({
    visibilityFilter,
    todos
});



let store = createStore(todoApp);



render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)





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
