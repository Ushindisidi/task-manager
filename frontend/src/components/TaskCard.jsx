function TaskCard({ task, onEdit, onDelete }) {

  const statusColors = {
    pending:     "orange",
    in_progress: "blue",
    completed:   "green"
  }

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", marginBottom: "12px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.due_date ?? "No due date"}</p>
      <span style={{ color: statusColors[task.status], fontWeight: "bold" }}>
        {task.status.replace("_", " ").toUpperCase()}
      </span>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onEdit(task)} style={{ marginRight: "8px" }}>Edit</button>
        <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>Delete</button>
      </div>
    </div>
  )
}

export default TaskCard