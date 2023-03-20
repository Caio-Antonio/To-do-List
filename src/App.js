import { useState } from 'react';
import './App.css';
import Task from './components/Task';
function App() {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("")
  const handleChange = (event) => {
        setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,   
    }
      setToDoList([...toDoList, task])
  }



  const deleteTask = (id) => {
     setToDoList(toDoList.filter((task) => task.id !== id ))
  }


  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true}
        }
        else {
          return task
        }
      } )
    )
  }





  return (
    <div className="App">
      <div className='intro'>
        <h1>To_do</h1>
        <p>To_do é um gerenciador de tarefas desenvolvido para o dia-a-dia</p>
      </div>
      <div className='content'>
      <div className='addTask'>
         <input className='addText' placeholder='Digite sua Tarefa...' onChange={handleChange}></input>
         <button className='add' onClick={addTask}>Add</button>
      </div>
      <div className='list'>
          {toDoList.map((task)=> {
            return <Task taskName={task.taskName} id={ task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />})}
      </div>
      </div>
    </div>
  );
}

export default App;
