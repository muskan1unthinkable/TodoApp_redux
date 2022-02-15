import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/actions";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const list = useSelector((state) => state.todoReducers.list);

  const dispatch = useDispatch();

  return (
    <>
      <div className="Center Container">
        <div className="Center">
          <input
            type="text"
            placeholder="write your Todo here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          >
            
          </input>
          <button onClick={() => dispatch(addTodo(todo), setTodo(""))}>
            {" "}
            +{" "}
          </button>
          
        </div>
        <div className="Center Wrapper">
          {list.map((item) => {
            return (
              <>
                <div className="wrap right" key={item.id} id={item.id}>
                  <p style={{display:"inline-block",margin:"5px"}}>{item.data}</p>
                  <button className="delete-btn "
                    onClick={() => dispatch(deleteTodo(item.id))}
                    
                  >-</button>

                  
                </div>
                
              </>
            );
          })}
        </div>
        <div className="Center">
          {list.length !== 0 ? (
            <button onClick={() => dispatch(removeTodo())}>Remove all</button>
          ) : (
            <h3></h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
