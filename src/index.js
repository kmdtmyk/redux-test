
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers'
import App from './App'




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
