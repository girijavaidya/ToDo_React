
import './App.css';

function App() {
  return (
    <div className="App d-flex">
    <h1 className='fs-1 text-center'>TO-DO APP</h1>

    <div className='todo-wrapper d-flex d-row justify-content-center align-item-center'>
      <div className='todo-input'>
        <label>Title</label>
        <input type="text" placeholder='Enter the Title'/>
      </div>
      <div className='todo-input'>
          <label>Discription</label>
        <input type="text" placeholder='Enter the Title-Discription'/>
      </div>
      <div className='todo-input'>
         <button type='button' className='primaryBtn'>Add</button>
       
      </div>
 <div className='btn-area'>
        <button>ToDo</button>
          <button>Completed</button>
    </div>
    <div className='ToDO List'>
       <div className='todo-list item'>
        <h3>Task1</h3>
        <p>Description</p>
       </div>
    </div>
    </div>
   

    
    </div>
  );
}

export default App;
