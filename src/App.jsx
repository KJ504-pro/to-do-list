import React from 'react'
import { UserContextProvider } from './Context/usercontext'
import { useEffect, useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

const App = () => {
  let [todo_list, setTodo] = useState([]);
  const addTodo = (todo) => {
    let x = { id: Date.now(), todo: todo, completed: false };

    setTodo([...todo_list, x]);
    console.log(todo_list);
  }
  const updateTodo = (id, todo) => {
    setTodo(todo_list.map((todos) => {
      if (todos.id == id) {
        todos.todo = todo;
      }
      return todos;
    }))
  }
  const deleteTodo = (id) => {
    setTodo(todo_list.filter((todos) => {
      return todos.id != id;
    }))
  }
  const toggleComplete = (id) => {
    setTodo(todo_list.map((todos) => {
      if (todos.id == id) {
        todos.completed = !(todos.completed);
      }
      return todos;
    }))
  }
  useEffect(() => {
    let previous = JSON.parse(localStorage.getItem("todos"));
    if (previous && previous.length>0) {
      setTodo(previous);
    }
  }, [])
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todo_list));

  }, [todo_list])
  return (
    <UserContextProvider value={{ todo_list, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todo_list.map((todos) => {
                let x = todos.id;
                let y = todos.todo;
                let z = todos.completed;
                return <TodoItem id={x} todo={y} completed={z} />
              })}
          </div>
        </div>
      </div>
    </UserContextProvider>

  )
}

export default App