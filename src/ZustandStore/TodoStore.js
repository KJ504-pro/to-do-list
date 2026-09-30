import {create} from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const TodoStore =(set)=>({
    todo_list:[],
    addTodo:(todo)=>{
        set((state)=>({
            todo_list:[...state.todo_list,{id:Date.now(),todo:todo,completed:false}]
        }))
    },
    deleteTodo:(id)=>{
        set((state)=>({
            todo_list:state.todo_list.filter((todo)=>{
                return todo.id!=id;
            })
        }))
    },
    toggleComplete:(id)=>{
        set((state)=>({
            todo_list: state.todo_list.map((todos)=>todos.id===id ? {...todos,completed:!todos.completed}:todos)
        }))
    },
    updateTodo:(id,x)=>{
        set((state)=>({
            todo_list:state.todo_list.map((todos)=> todos.id===id ? {...todos,todo : x}:todos)
        }))
    }
})

const useTodoStore =create(
    devtools(
        persist(
            TodoStore,{
                name:"todo"
            }
        )
    )
)
export default useTodoStore