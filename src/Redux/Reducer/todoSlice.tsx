import { createSlice } from "@reduxjs/toolkit";

type FormTodo ={
    todo: Array<{
        id:number;
        todo:string;
    }>
}

const initialState:FormTodo ={
    todo:[],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        save: (state={...initialState},action)=>{
            console.log("Save TODO", action.payload);
            state.todo.push(action.payload);
        },
        update:(state,action)=>{
            console.log("Update TODO", action.payload);
            const allTodo = [...state.todo];
            const newData = allTodo?.filter((record:any)=>record.id !== action.payload);
            state.todo=[...newData,action.payload];
        },
        deleted:(state,action)=>{
            console.log("Deleted", action.payload);
            state.todo = state.todo.filter((record:any)=> record.id !== action.payload);
        },
    },
});

export const {save,update,deleted} = todoSlice.actions;
export default todoSlice.reducer;

