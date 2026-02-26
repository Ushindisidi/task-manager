import { useState, useEffect } from "react"

function TaskForm({ onSubmit, editingTask, onCancel }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    due_date: ""
  })

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title:       editingTask.title       ?? "",
        description: editingTask.description ?? "",
        status:      editingTask.status      ?? "pending",
        due_date:    editingTask.due_date     ?? ""
      })
    }
  }, [editingTask])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ title: "", description: "", status: "pending", due_date: "" })
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
      <h2>{editingTask ? "Edit Task" : "Create New Task"}</h2>

      <div>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
        />
      </div>

      <div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "8px", width: "100%", padding: "8px" }}
        />
      </div>

      <div>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "8px", padding: "8px" }}
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <input
          name="due_date"
          type="date"
          value={formData.due_date}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "8px", padding: "8px" }}
        />
      </div>

      <button type="submit" style={{ marginRight: "8px" }}>
        {editingTask ? "Update Task" : "Create Task"}
      </button>

      {editingTask && (
        <button type="button" onClick={onCancel}>Cancel</button>
      )}

    </form>
  )
}
export default TaskForm