import { useState } from "react";

export default function TaskEditModel({ task, onEdit, onOpen }) {
  const [editedTitle, setEditedTitle] = useState(task.title);
  function handleSave() {
    onEdit({ ...task, title: editedTitle });
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
