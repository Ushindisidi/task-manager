import { useState, useEffect } from "react"
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"

const API = "http://127.0.0.1:8080/api/tasks"

function TaskList() {
  const [tasks, setTasks]           = useState([])
  const [editingTask, setEditingTask] = useState(null)
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)

  // Fetch all tasks when component loads
  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    try {
      setLoading(true)
      const res  = await fetch(API)
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      setError("Failed to load tasks. Is the backend running?")
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(formData) {
    try {
      await fetch(API, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData)
      })
      fetchTasks()
    } catch (err) {
      setError("Failed to create task.")
    }
  }

  async function handleUpdate(formData) {
    try {
      await fetch(`${API}/${editingTask.id}`, {
        method:  "PUT",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData)
      })
      setEditingTask(null)
      fetchTasks()
    } catch (err) {
      setError("Failed to update task.")
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" })
      fetchTasks()
    } catch (err) {
      setError("Failed to delete task.")
    }
  }

  function handleSubmit(formData) {
    if (editingTask) {
      handleUpdate(formData)
    } else {
      handleCreate(formData)
    }
  }

  if (loading) return <p>Loading tasks...</p>
  if (error)   return <p style={{ color: "red" }}>{error}</p>

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "24px" }}>

      <TaskForm
        onSubmit={handleSubmit}
        editingTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />

      <h2>All Tasks ({tasks.length})</h2>

      {tasks.length === 0 && <p>No tasks yet. Create one above!</p>}

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      ))}

    </div>
  )
}
export default TaskList