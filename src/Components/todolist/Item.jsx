import React from "react";

export default function TodoItem({ task, deleteTask, handleEdit, isChecked, handleCheckboxChange }) {


  return (
    <div className="">
      <li className="py-2 mb-2 list-unstyled border-bottom d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(task.id)} />
          <label className={`form-check-label ${task.isChecked ? 'text-decoration-line-through text-muted' : ''}`}>{task.text} </label>

        </div>
        <span>
          <button className="mx-2 btn btn-outline-secondary" onClick={() => handleEdit(task.id)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </span>
      </li>
    </div>
  );
}
