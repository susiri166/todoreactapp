import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag buttoname="Html"/>
            <Tag buttoname="Css"/>
            <Tag buttoname="Java Script"/>
            <Tag buttoname="React"/>
          </div>

          <div>
            <select className="task_status">
              <option value="todo">todo</option>
              <option value="doing">doing</option>
              <option value="done">done</option>
            </select>
          </div>

          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
