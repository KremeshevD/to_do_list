import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getTask} from '../redux/appReducer'
import {toggleComplete} from '../redux/tasksReducer'
import Items from './Items'
import Preloader from '../Preloader';

const TaskList = (props)=> {

    useEffect(()=>{
        props.getTask()
    },[]);

    return (
        <div>
            
            {!props.isFetching && props.loadingError ? 
            <div className="center_block">
            <div><p>Something wrong...</p></div>
            <button onClick={props.getTask}>Try again</button>
            </div> 
            :            
            props.isFetching && !props.loadingError ?
            <Preloader />
            :
            props.tasks.length == 0 ?
                <div>You don't have tasks</div>
            : <div>
                <Items tasks={props.tasks}
                    toggleComplete = {props.toggleComplete}/>
            </div>
             }   
        </div>
    )
}

const mapStateToProps = (state) => ({
    isFetching: state.app.isFetching,
    loadingError: state.app.loadingError,
    tasks: state.tasks.tasks
})


export default connect(mapStateToProps,{getTask,toggleComplete})(TaskList)

