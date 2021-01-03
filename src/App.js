import React from 'react';
import Add from './components/Add';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Add />
      <TodoList />
    </div>
  );
}

export default App;
