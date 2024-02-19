import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : 'Todos',
    initialState : {
        todos : [{
            title : 'Hello World',
            id : 1
        }]
    },
    reducers : {
        addTodo : (state,action)=>{
            state.todos.push({
                title : action.payload,
                id : nanoid()
            })
        },
        removeTodo : (state,action)=>{
            state.todos.splice(action.payload, 1)
        },
        removeAll : (state)=>{
            state.todos = []
        },
        editTodo : (state,action)=>{
            const {id , newTitle} = action.payload;
            const editTodo = state.todos.find(todo => todo.id === id);
            if(editTodo){
                editTodo.title = newTitle;
            }
        }
    }
})

export default todoSlice.reducer
export const {addTodo,removeTodo,removeAll,editTodo} = todoSlice.actions