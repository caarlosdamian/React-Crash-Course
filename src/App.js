import Header from "./components/Header";
import React, { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      dat: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors Appointment",
      dat: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors Appointment",
      dat: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Doctors Appointment",
      dat: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
