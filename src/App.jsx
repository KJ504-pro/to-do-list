import React from 'react'

import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import useTodoStore from './ZustandStore/TodoStore';

const App = () => {
  let todo_list= useTodoStore((state)=>state.todo_list)
  return (
    
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
              todo_list.map((todos)=>{
                let x = todos.id;
                let y = todos.todo;
                let z = todos.completed;
                return <TodoItem key = {x} id = {x} todo = {y} completed ={z}/>
              })
            }
          </div>
        </div>
      </div>
  )
}

export default App