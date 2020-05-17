import React from 'react';
import style from './App.module.css'
import TaskList from './component/TaskList/TaskList';
import NewTask from './component/NewTask';


const  App = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>To do list</h1>
      <div>
        <div className={style.new_task_container}>
          <NewTask />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
