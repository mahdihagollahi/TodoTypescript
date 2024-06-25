import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}


const todoslice = createSlice({
    name : 'todo',
    initialState ,
     reducers:{
        addTodo : (state , action) =>{
            state.todos.push({
                id :Date.now() , title: action.payload.title , completed: false  
            })
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id)
        },

        markTodo : (state , action) =>{
            state.todos = state.todos.map((todo)=>
                todo.id === action.payload.id
            ?{...todo , completed : !todo.completed}
            :todo
            )
        },


        editTodo : (state , action) => {
              state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
            ?{...todo , title : action.payload.title}
            :todo
            )
        }

      
     }
})


export const {addTodo , deleteTodo , markTodo , editTodo} = todoslice.actions

export default todoslice.reducer;

 