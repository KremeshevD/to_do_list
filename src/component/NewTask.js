import React from 'react';
import { connect } from 'react-redux';
import {addTask, changeNewTask} from '../component/redux/tasksReducer'
import style from './NewTask.module.css'

const NewTask = (props) => {


    const submitHandler = (e) => {
        e.preventDefault();
        props.addTask(props.newTaskText)
    }

    return (
        <div className={style.container}>
            <form onSubmit={submitHandler} className ={style.input_field}>
                <div><input  type='text' palaceholder='Input your task' 
                    onChange={(e)=>{props.changeNewTask(e.currentTarget.value)}}
                    value ={props.newTaskText}
                    className={props.formError && style.error}
                    >
                </input>
                <button type='submit' onClick = {submitHandler}>ADD</button>
                </div>
                {!props.formError ? "" : <span>Please enter not empy task...</span>}
                
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newTaskText: state.tasks.newTaskText,
    formError: state.tasks.formError
})

export default connect(mapStateToProps,{addTask, changeNewTask})(NewTask)