import React, { useContext, useState } from 'react'

import useTodoStore from '../ZustandStore/TodoStore';

function TodoForm() {
    let [val,setval]=useState("");
    let addTodo = useTodoStore((state)=> state.addTodo)
    return (
        <form  className="flex" onSubmit={(e)=>{e.preventDefault()
            addTodo(val);
            console.log(val);
            setval("");
            
            
        }}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {val}
                onChange={(e)=>{setval(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                
                Add
            </button>
        </form>
    );
}

export default TodoForm;

