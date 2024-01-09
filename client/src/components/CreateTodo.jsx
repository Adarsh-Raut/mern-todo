import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

function CreateTodo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const url = 'http://localhost:5000/todos';
  async function getTodos() {
    const todos = await axios.get(`${url}`);

    setTodos(todos.data);
  }
  useEffect(() => {
    getTodos();
  });

  function handleChange(event) {
    const todo = event.target.value;
    setInput(todo);
  }

  async function addTodo() {
    try {
      await axios.post(`${url}`, {
        todo: input,
      });
      setInput('');
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTodo(id) {
    await axios.delete(`${url}/${id}`);
  }

  return (
    <>
      <div className=" ">
        <form
          action=""
          className="px-4 pb-7 flex gap-2 justify-center items-center"
        >
          <input
            className=" max-w-3xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
            type="text"
            autoFocus
            value={input}
            onChange={handleChange}
          />
          <button onClick={addTodo}>
            <IoAddCircleOutline size="2rem" className="" color="#DBE2EF" />
          </button>
        </form>
      </div>
      <div className="">
        {todos.map((todo) => {
          return (
            <>
              <ul
                className="flex font-medium text-xl items-center  justify-between wrap border-slate-900 bg-slate-700  border-solid border-2 border-slate p-[10px] mx-[35%] "
                key={todo._id}
              >
                {todo.todo}
                <button onClick={() => removeTodo(todo._id)} className="px-1">
                  <MdDelete size="1.8rem" className="" color="#AE445A" />
                </button>
              </ul>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CreateTodo;
