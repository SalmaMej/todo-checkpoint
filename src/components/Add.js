import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions'

function AddTask ({ addTask }) {
    const [text, setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newtodo = {
            text : text,
            id : Date.now(),
            isComplete : false,
        };
        addTask(newtodo)
        setText('')
    };
    return(
        <div>
            <h1>My To Do App</h1>
            <form onSubmit={handleSubmit} >
                <input type = 'text' value={text} onChange={(e) => setText(e.target.value)} required/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default connect(null, { addTask })(AddTask);