import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
function DisplayTask() {
  const [task, setTask] = useState([]);
  const getData = async () => {
    try {
      //To fetch the data from the server
      const resp = await fetch("http://localhost:5000/get");
      //Converting the values to json format
      const data = await resp.json();
      setTask(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //To display data after each render
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <AddTask getData={getData} />
      <div className="align">
        {/* To display the values using map function */}
        {task.map((t) => (
          <p key={t}>{t.items}</p>
        ))}
      </div>
    </div>
  );
}
export default DisplayTask;
