import React from 'react'
import Todo from "../assets/direct-hit.png"
import "./TaskColumn.css"
import TaskCard from './TaskCard'
function TaskColum({title,icon}) {
  return (
    <section className='task_column'>
        <h2 className='task_colunm_heading'><img src={icon} alt="" className='task_column_icon' />{title}</h2>
        <TaskCard/>
    </section>
  )
}

export default TaskColum