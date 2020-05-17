import  { combineReducers, createStore, applyMiddleware } from 'redux'
import appReducer from './appReducer'
import tasksReducer from './tasksReducer'
import thunk from 'redux-thunk';


const combineReducer = combineReducers({
    app: appReducer,
    tasks: tasksReducer

})

const store = createStore(combineReducer, applyMiddleware(thunk));

    window.store = store;

export default store 