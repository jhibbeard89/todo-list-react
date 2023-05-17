import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="section">
          <form className="d-flex">
            <input
              type="text"
              placeholder="Todo list"
              className="form-control"
            />
            <button type="submit" className="btn btn-primary ms-1">
              Add
            </button>
          </form>
          <div className="list-section">
            <h3>My Todos</h3>
            <hr />
            <div>
              <div className="todoItem">
                <input type="checkbox" />
                <p className="ms-2">Learn React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
