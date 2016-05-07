import { combineReducers } from 'redux'


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




function todos(state = initialState.todos, action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ];
        case 'COMPLETE_TODO':
            return [
                    ...state.slice(0, action.index),
                    Object.assign({}, state[action.index], {
                        completed: true
                    }),
                    ...state.slice(action.index + 1)
                ];
        default:
            return state;
    }
}



function visibilityFilter(state = initialState.visibilityFilter, action){
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


export default todoApp
