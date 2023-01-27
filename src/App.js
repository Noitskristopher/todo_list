import './App.css';
import { useState } from 'react';
import ToDo from './components/ToDo';
import DisplayTodo from './components/DisplayTodo';

function App() {
  const [todoList, setTodoList] = useState([
    { text: 'wash dishes', isComplete: false },
    { text: 'fold clothes', isComplete: false }
  ]);

  return (
    <div className="App">
      <ToDo todoList={todoList} setTodoList={setTodoList} />
      <DisplayTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
