import { FETCHING_IN_PROGRESS, FETCHING_IS_FINISH } from "./action";
import api from '../api/api'
import { setTasks } from "./tasksReducer";


const initialState = {
    isFetching: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_IN_PROGRESS: 
            return {...state, isFetching: true}
        case FETCHING_IS_FINISH: 
            return {...state, isFetching: false}
        default: return state
    }
        
}

export const startFetching = () => ({
    type: FETCHING_IN_PROGRESS
})

export const finishFetching = () => ({
    type: FETCHING_IS_FINISH
})


export const getTask = () => {
    return async (dispatch) =>  { 
        dispatch(startFetching())
        api.getTask().then ( (response) => {
            console.log(1)
            dispatch(setTasks(response));
            dispatch(finishFetching());
            }  
        );

    }
}


export default appReducer