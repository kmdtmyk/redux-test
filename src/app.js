import expect from 'expect'
import { createStore } from 'redux'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}




const store = createStore(counter)


const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
            onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
        />,
        document.getElementById('root')
    )
}

store.subscribe(render)

render()



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
//
// const Counter = ({value, onIncrement, onDecrement}) => (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// )
//
//
//
// const store = createStore(counter)
//
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

// document.addEventListener('click', () => {
//     store.dispatch({type: 'INCREMENT'})
// })


// console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// console.log(store.getState())


// expect(
//   counter(0, {type: 'INCREMENT'})
// ).toEqual(1)
//
// expect(
//   counter(1, {type: 'INCREMENT'})
// ).toEqual(2)
//
// expect(
//   counter(2, {type: 'DECREMENT'})
// ).toEqual(1)
//
// expect(
//   counter(1, {type: 'UNKNOWN'})
// ).toEqual(1)
//
// expect(
//   counter(undefined, {})
// ).toEqual(0)
//
// console.log('test passed!')
