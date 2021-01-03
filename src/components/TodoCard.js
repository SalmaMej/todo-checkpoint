import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, doneUndoneTask, editTask } from '../redux/actions'
import Edit from './edit';
import '../App.css'

function TodoCard ({task, doneUndoneTask, deleteTask}) {
    return(
        <div className='card'>
            <p onClick={() => doneUndoneTask(task.id)} 
            style = { task.isComplete ? { textDecoration : 'line-through', opacity :'0.3'} : {cursor: 'pointer'}}>{task.text}</p>
            <div className='buttons'>
                <button onClick= {() => deleteTask(task.id)}>Delete</button>
                <Edit oldTask={task} />
            </div>
        </div>
    )
}

export default connect(null, {deleteTask, doneUndoneTask, editTask})(TodoCard);