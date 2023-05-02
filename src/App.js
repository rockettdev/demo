import './App.css';
import Todo from './/Components/Todo.js'
// import { useState } from 'react';

const initialTodo = [
  "Wash Dishes",
  "Clean Car",
  "Walk the Dog"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo todoList={initialTodo}/>
      </header>
    </div>
  );
}

export default App;
