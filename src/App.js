import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions, { addTodo, completeTodo, setVisibilityFilter } from './actions'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'


class App extends Component{

    render(){
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text => dispatch(addTodo(text))}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index => dispatch(completeTodo(index))}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={filter => dispatch(setVisibilityFilter(filter))}
                />
            </div>
        )
    }

}

function selectTodos(todos, filter){
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
    }
}

function select(state){
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}


export default connect(select)(App)
