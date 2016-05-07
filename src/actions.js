

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const completeTodo = (index) => {
    return {
        type: 'COMPLETE_TODO',
        index
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}



// export default{
//
//     addTodo: (text) => {
//         return {
//             type: 'ADD_TODO',
//             text
//         }
//     },
//
//
//     completeTodo: (index) => {
//         return {
//             type: 'COMPLETE_TODO',
//             index
//         }
//     },
//
//     setVisibilityFilter: (filter) => {
//         return {
//             type: 'SET_VISIBILITY_FILTER',
//             filter
//         }
//     },
//
// }

/*
export default{

    addTodo(text){
        return {
            type: 'ADD_TODO',
            text
        }
    },


    completeTodo(index){
        return {
            type: 'COMPLETE_TODO',
            index
        }
    },

    setVisibilityFilter(filter){
        return {
            type: 'SET_VISIBILITY_FILTER',
            filter
        }
    },

}
*/
