import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "../Redux/Reducer/todoSlice";

const Formtodo = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const datahandle = (e: any) => {
    e.preventDefault();
    const todos = {
      id: Math.random(),
      todo,
    };
    console.log(todos);
    dispatch(save(todos));
  };

  return (
    <div className="form">
      <form>
        <label>Todo:</label>
        <br />
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <br />
        <button type="submit" onClick={datahandle}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Formtodo;
