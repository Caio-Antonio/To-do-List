import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const Task = (props) => {
    return <div
     className='item'
    style={{backgroundColor: props.completed ? 'green' : 'white'}}
    >
    <button className='complete' onClick={() => props.completeTask(props.id)} > <FaCheck /> </button>
    <h2>{props.taskName}</h2>
    <div className='botoesDireita'>
    <button className='delete' onClick={() => props.deleteTask(props.id)}> <FaTrashAlt /> </button>
    <button className='edit' onClick={() => props.editTask(props.id)} > <FaPen /> </button>
    </div>
    </div>
}
export default Task
