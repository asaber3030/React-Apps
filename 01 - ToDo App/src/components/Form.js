import React  from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.floor(Math.random() * 100) }
      ]);
      let liItem = document.querySelectorAll('.todo-item');
      setInputText("");
    } else {
      alert("Enter a title for your task");
    }
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form method='post'>
      <input
        type="text"
        className='todo-input'
        value={inputText}
        placeholder='Title'
        onChange={inputTextHandler}
      />
      <div className="btn-con">
        <button className='todo-button' onClick={submitTodoHandler} type='submit'><i className='fas fa-fw fa-plus'></i></button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" id="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;