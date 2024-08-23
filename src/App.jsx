import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColum from './components/TaskColum'
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
function App() {
  return (
    <div className='app'>
     <TaskForm/>
      <main className='app_main'>
        <TaskColum title="To do" icon={todoIcon}/>
        <TaskColum title="Doing" icon={doingIcon}/>
        <TaskColum title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App