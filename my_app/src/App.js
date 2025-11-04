import React, { useState } from 'react';


import './App.css';

import { FaTrash, FaCheck } from "react-icons/fa"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewdescription] = useState("");

  const handleAddTool = ()=>
  {
    let newTodoitem =
    {
      title:newTitle,
      description:newDescription
    }

    let updatedTodoArr = 
    [
      ...allTodos
    ];
    updatedTodoArr.push(newTodoitem);
    setTodos(updatedTodoArr)
  }

  return (
    <div className="App">
      <div>
      <h1 className="heading fs-1 text-center">TO-DO APP</h1>
    </div>

      <div className="todo-wrapper d-flex flex-column justify-content-center align-items-center">
        {/* Input Section */}
     <div className="d-flex align-items-end justify-content-start gap-3 flex-wrap todo-input-group">

  {/* Title Input */}
  <div className="todo-input">
    <label className="form-label mb-1">Title</label>
    <input type="text" className="form-control" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Enter the Title" />
  </div>

  {/* Description Input */}
  <div className="todo-input">
    <label className="form-label mb-1">Description</label>
    <input type="text" value={newDescription} onChange={(e)=>setNewdescription(e.target.value)} className="form-control"  placeholder="Enter the Title Description" />
  </div>

  {/* Buttons */}
  <div class="todo-input d-flex  gap-2 flex-nowrap">
  <button type="button" class=" primaryBtn" onClick={handleAddTool}>Add</button>

 
</div>

</div>


        
        <div className="container-fluid">
  {/* <div className="row"> */}
    <div className="col-lg-8 col-md-10 col-12"> {/* controls width and left alignment */}
      
      {/* Button Section */}
      <div className="btn-area py-4">
        <button  className={`secondaryBtn ${isCompleteScreen === false ? "active" : ""}`} onClick={()=>setIsCompleteScreen(false)}>ToDo</button>
        <button className={`secondaryBtn ${isCompleteScreen === true ? "active" : ""}`}onClick={()=>setIsCompleteScreen(true)}>Completed</button>
      </div>

      {/* Task List Section */}
      <div className="todo-list">
                
     {allTodos.map((item, index) => {
  return (
    <div key={index}>
      {item}
    </div>
  );
})}


        {/* <div className="todo-list-item d-flex align-items-center justify-content-between p-3  mb-3  shadow-sm">
          
          <div className="text-section">
            <h1 className="mb-1 fs-2 text-white">Task 1</h1>
            <p className="mb-0 " style={{color: "rgb(161, 161, 161)"}} >Description</p>
          </div>

          <div className="todo-icons d-flex gap-3">
            <FaCheck className="text-success fs-2" style={{ cursor: "pointer" }} />
            <FaTrash className="text-white fs-2" style={{ cursor: "pointer" }} />
          </div>
        </div> */}
      </div>

    </div>
  </div>
</div>

      </div>
   
  );
}

export default App;
