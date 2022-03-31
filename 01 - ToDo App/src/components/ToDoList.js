import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  if (todos.length === 0) {
    return (
      <div className="emptyElements">No Tasks!</div>
    );
  } else {
    return (
      <div id='co'>
        <h3>MyList</h3>
        <div className="todo-container">
          <ul className="todo-list">
            {
              filteredTodos.map((todo) => (
                <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
              ))
            }
          </ul>
        </div>
      </div>

    );
  }

};

export default TodoList;