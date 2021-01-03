import React from 'react';
import { connect } from 'react-redux'
import TodoCard from './TodoCard';

function TodoList ({todoList}) {
    return (
        <div>
         {todoList.map((el) => (
         <TodoCard task={el} key={el.id} />
         ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    todoList : state.tasks,
})

export default connect(mapStateToProps)(TodoList);