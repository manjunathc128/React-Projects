import { useState, useRef, useEffect } from "react";
export default function TaskForm({ onAddTask }) {
  // rendering logic
  const [task, setTask] = useState("");
  const ref = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) {
      return;
    }
    const taskobj = { title: task, status: false };
    onAddTask(taskobj);
    setTask("");
    ref.current.focus();
  }
  useEffect(() => {
    function pressed(e) {
      if (e.code == "Enter") {
        ref.current.focus();
      }
    }
    // ref.current.focus();
    document.addEventListener("keydown", pressed);
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        placeholder="Enter your Task"
        onChange={(e) => setTask(e.target.value)}
        ref={ref}
      />
      <button> Add Task</button>
    </form>
  );
}
