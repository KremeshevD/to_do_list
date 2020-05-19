import { FETCHING_IN_PROGRESS, FETCHING_IS_FINISH, LOADING_ERROR } from "./action";
import api from '../api/api'
import { setTasks } from "./tasksReducer";


const initialState = {
    isFetching: false,
    loadingError: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_IN_PROGRESS: 
            return {...state, isFetching: true}
        case FETCHING_IS_FINISH: 
            return {...state, isFetching: false}
        case LOADING_ERROR: 
            return {...state, loadingError: action.payload}
        default: return state
    }
        
}

export const startFetching = () => ({
    type: FETCHING_IN_PROGRESS
})

export const finishFetching = () => ({
    type: FETCHING_IS_FINISH
})

export const loadingError = (payload) => ({
    type: LOADING_ERROR,
    payload
})


export const getTask = () => {
    return (dispatch) =>  { 
        dispatch(startFetching())
        api.getTask().then ( (response) => {
                if (response.message && response.message === 'error') {
                    dispatch(finishFetching());
                    dispatch(loadingError(true))
                } else {
                    dispatch(setTasks(response));
                    dispatch(finishFetching());
                    dispatch(loadingError(false))
                }
            }  
        )
    }
}


export default appReducer