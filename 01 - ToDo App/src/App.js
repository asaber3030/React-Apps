import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

import Form from './components/Form';
import TodoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = localStorage.getItem('todos');
      setTodos(JSON.parse(todoLocal));
    }
  };

  return (
    <div className="App">
      <header>
        <h1><span>ToDo</span> List Using ReactJS With <code>js.localStorage</code> Created By <span><a href="https://www.facebook.com/asaber.25/" target='_blank'>@ASaber</a></span></h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText} t
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
