import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="fs-1 text-center">TO-DO APP</h1>

      <div className="todo-wrapper d-flex flex-column justify-content-center align-items-center">
        {/* Input Section */}
        <div className="d-flex todo-input-group">
          <div className="todo-input">
            <label>Title</label>
            <input type="text" placeholder="Enter the Title" />
          </div>

          <div className="todo-input">
            <label>Description</label>
            <input type="text" placeholder="Enter the Title Description" />
          </div>

          <div className="todo-input">
            <button type="button" className="primaryBtn">Add</button>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="btn-area mt-3">
          <button>ToDo</button>
          <button>Completed</button>
        </div>

        {/* Task List Section */}
        <div className="todo-list mt-3">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
