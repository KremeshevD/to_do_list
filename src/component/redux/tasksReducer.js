import { SET_TASKS, TASK_COMPLETED, ADD_NEW_TASK, CHANGE_NEW_TASK_TEXT } from "./action";



const initialState = {
    tasks: [],
    newTaskText: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TASKS: 
            return {...state, tasks: [...action.payload]}
        case TASK_COMPLETED: 
            return {...state, tasks: state.tasks.map(e => 
                e.id === action.payload ? {...e, completed: !e.completed} : e
            )}
        case ADD_NEW_TASK: 
            let newTask = {
                title: state.newTaskText,
                id: state.tasks.length+1,
                completed: false
                }
            return {...state, 
                tasks: [...state.tasks, newTask],
                newTaskText: ''
            }
        case CHANGE_NEW_TASK_TEXT: 
                return {...state, newTaskText: action.payload}
        default: return state
    }
        
}

export const setTasks = (payload) => ({
    type: SET_TASKS,
    payload
})
export const taskCompleted = (payload) => ({
    type: TASK_COMPLETED,
    payload
})
export const addNewTask = (payload) => ({
    type: ADD_NEW_TASK,
})

export const changeNewTextTask = (payload) => ({
    type: CHANGE_NEW_TASK_TEXT,
    payload
})



export const toggleComplete = (e)=> {
    return (dispatch) => {
        dispatch(taskCompleted(e))
    }
};

export const addTask = () => (dispatch) => dispatch(addNewTask());

export const changeNewTask = (payload) => {
    return (dispatch) => {
        dispatch(changeNewTextTask(payload))
    }
}


export default appReducer