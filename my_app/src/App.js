import React, { useEffect, useState } from 'react';


import './App.css';

import { FaTrash, FaCheck } from "react-icons/fa"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  
  // state array
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewdescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);




  const handleAddTool = ()=>
  {
    let newTodoitem =
    {
      title:newTitle,
      description:newDescription
    }

  // copy the array and add new item
    let updatedTodoArr = 
    [
      ...allTodos
    ];
    updatedTodoArr.push(newTodoitem);
    setTodos(updatedTodoArr)
    // whenever you store array or object in local storage convert into string then we can use globally
    // then they pass the array
    localStorage.setItem('todolist',JSON.stringify
      (updatedTodoArr))
  };

  // delete todo item
const handleDeleteTodo = (index) => {
  setTodos(prevTodos => {
    const updated = prevTodos.filter((_, i) => i !== index);
    localStorage.setItem("todolist", JSON.stringify(updated));
    return updated;
  });
};  

// complete todo item
const handleCompleted = (index)=>
{
  let now = new Date();
  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  let yyyy = now.getFullYear();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let completedOn = dd +'-'+ mm +'-' + yyyy + 'at' + h + ':'+ m+ ':'  + s;

  let filteredItem = 
  {
    ...allTodos[index],
    completedOn:completedOn
  }
    let updatedCompletedArr = [...completedTodos]; 
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index)
  }





  // useEffect use it
// useeffect use that when ever use render the component
// when ever the render the component first time to check local storage having item or not then thy popuplate the local storage
  useEffect(()=>
  {
// create variable getting the data from local storage
// when you convert into array or object to backend use JSON.paras
// JSON.paras is convert into localstorage data into the array
    let savedTodos = JSON.parse(localStorage.getItem("todolist"))

    if(savedTodos)
    {
      // in settodod updating the array and rendering the thing
      // NULL is not use the map operation
      setTodos(savedTodos);
    }

  },[])

  return (
    <div className="App">
      <div>
      <h1 className="heading fs-1 text-center">TO-DO APP</h1>
    </div>

      <div className="todo-wrapper d-flex flex-column justify-content-center align-items-center">
        {/* Input Section */}
        <div className="todo-input-container">
     <div className="d-flex align-items-end justify-content-start gap-3 flex-wrap todo-input-group">

  {/* Title Input */}
  <div className="todo-input">
    <label className="form-label mb-1">Title</label>
    <input type="text" className="form-control" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Enter the Title" required/>
  </div>

  {/* Description Input */}
  <div className="todo-input">
    <label className="form-label mb-1">Description</label>
    <input type="text" value={newDescription} onChange={(e)=>setNewdescription(e.target.value)} className="form-control"  placeholder="Enter the Title Description" required/>
  </div>

  {/* Buttons */}
  <div className="todo-input d-flex  gap-2 flex-nowrap">
  <button type="button" class=" primaryBtn" onClick={handleAddTool}>Add</button>

 
</div>
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
                
     {isCompleteScreen===false && allTodos.map((item, index) => {
  return (
    <div className="todo-list-item d-flex align-items-center justify-content-between p-3  mb-3  shadow-sm" key={index}>
          
          <div className="text-section">
            <h1 className="mb-1 fs-4 text-danger">{item.title}</h1>
            <p className="mb-0 " style={{color: "rgb(161, 161, 161)"}}>{item.description}</p>
          </div>

          <div className="todo-icons d-flex gap-3">
         <FaCheck
  className="text-success fs-5"
 onClick={()=>handleCompleted(index)}
  style={{ cursor: "pointer" }}
/>

            <FaTrash className=" fs-5 text-danger"  onClick={() => handleDeleteTodo(index)} style={{ cursor: "pointer" }} />
          </div>
        </div> 
    
  );
})}

{isCompleteScreen===true && completedTodos.map((item, index) => {
  return (
    <div className="todo-list-item d-flex align-items-center justify-content-between p-3  mb-3  shadow-sm" key={index}>
          
          <div className="text-section">
            <h1 className="mb-1 fs-4 text-danger">{item.title}</h1>
            <p className="mb-0 " style={{color: "rgb(161, 161, 161)"}}>{item.description}</p>
            <p><small>Completed On: {item.completedOn}</small></p>
          </div>

          <div className="todo-icons d-flex gap-3">
         {/* <FaCheck
  className="text-success fs-5"
 onClick={()=>handleCompleted(index)}
  style={{ cursor: "pointer" }}
/> */}

            <FaTrash className=" fs-5 text-danger"  onClick={() => handleDeleteTodo(index)} style={{ cursor: "pointer" }} />
          </div>
        </div> 
    
  );
})}



      
      </div>

    </div>
  </div>
</div>

      </div>
   
  );
}

export default App;
