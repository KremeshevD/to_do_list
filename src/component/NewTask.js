import React from 'react';
import { connect } from 'react-redux';
import {addTask, changeNewTask} from '../component/redux/tasksReducer'
import style from './NewTask.module.css'

const NewTask = (props) => {


    const submitHandler = (e) => {
        e.preventDefault();
        props.addTask()
    }

    return (
        <div>
            <form onSubmit={submitHandler} className ={style.input_field}>
                <input  type='text' palaceholder='Input your task' 
                    onChange={(e)=>{props.changeNewTask(e.currentTarget.value)}}
                    value ={props.newTaskText}>
                </input>
                <button type='submit' onClick = {submitHandler}>ADD</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newTaskText: state.tasks.newTaskText
})

export default connect(mapStateToProps,{addTask, changeNewTask})(NewTask)