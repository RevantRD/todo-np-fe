import React, { useState } from "react";
function AddTask({ getData }) {
  const [items, setItems] = useState("");
  //Adding some functionality when the submit button is clicked
  const handleSubmit = async (e) => {
    //Stop refreshing the page every time
    e.preventDefault();
    console.log({ items });
    try {
      //Fetching the api to add the values to the server POST method
      const resp = await fetch("http://localhost:5000/add", {
        method: "POST",
        body: JSON.stringify({ items }),
        headers: { "content-type": "application/json" },
      });

      //Calling the getData function from DisplayTask component
      if (resp.status === 400) {
        alert("Task must be added");
      } else if (resp.status === 201) {
        getData();
        setItems("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1 className="task mt-3 mb-4 text-center">Add Task</h1>
      <form onSubmit={handleSubmit} className="col-md-6 form-align">
        <div class="input-group">
          <span class="input-group-text">Enter the task</span>
          {/* Input box for adding values to the storage  */}
          <input
            type="text"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="form-control"
            placeholder="Enter your task"
          />
          <button type="submit" className="btn btn-primary">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTask;
