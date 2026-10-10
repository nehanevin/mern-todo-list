import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]); // all tasks live in state
  const [error, setError] = useState("");

  // Fetch all tasks from the backend when the page loads
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => setError("Could not load tasks. Is the backend running?"));
  }, []);

  // Add a task: POST to backend, then add the returned task to state
  const addTask = async (title) => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error();
      const newTask = await res.json();
      setTasks([...tasks, newTask]);
      setError("");
    } catch {
      setError("Could not add task.");
    }
  };

  // Toggle complete/incomplete: PUT to backend, then update that task in state
  const toggleTask = async (task) => {
    try {
      const res = await fetch(`${API}/${task._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
    } catch {
      setError("Could not update task.");
    }
  };

  // Delete a task: DELETE on backend, then remove it from state
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setTasks(tasks.filter((t) => t._id !== id));
    } catch {
      setError("Could not delete task.");
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      {error && <p className="error">{error}</p>}
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
