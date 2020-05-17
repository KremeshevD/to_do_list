import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getTask} from '../redux/appReducer'
import {toggleComplete} from '../redux/tasksReducer'
import Items from './Items'
import Preloader from '../Preloader';

const TaskList = (props)=> {
    return (
        <div>
            
            <button onClick={props.getTask}>Load</button>
            {props.isFetching?
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
    tasks: state.tasks.tasks
})


export default connect(mapStateToProps,{getTask,toggleComplete})(TaskList)

