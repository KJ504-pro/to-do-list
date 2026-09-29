import React, { createContext, useContext } from "react";
export const UserContext = createContext({
    todo_list : [],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
    
}) 

export  const UserContextProvider = UserContext.Provider;
export const useTodo=()=>{
    return useContext(UserContext)
}