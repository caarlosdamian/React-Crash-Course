import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTask = async () => {
      const { data } = await axios.get("http://localhost:5000/tasks");
      setTasks(data);
    };
    getTask();
  }, []);
  const addTask = async (task) => {
    const { data } = await axios.post("http://localhost:5000/tasks", task);

    setTasks([...tasks, data]);
  };
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toogleReminder = (id) => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((res) => {
      const updTask = { ...res.data, reminder: !res.data.reminder };
      axios.patch(`http://localhost:5000/tasks/${id}`, updTask);
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && (
        <AddTask
          onAdd={addTask}
          onToggle={() => setShowAddTask(!showAddTask)}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />
      ) : (
        "No Task"
      )}
    </div>
  );
}

export default App;
