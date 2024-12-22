import "./styles.css";
import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskEditModel from "./TaskEditModel";
import SortTask from "./SortTask";

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    const savedTask = localStorage.getItem("taskList");
    return savedTask
      ? JSON.parse(savedTask)
      : [
          { title: "Task 1", status: true },
          { title: "Task 2", status: false },
        ];
  });

  const [isModelOpen, setIsModelOpen] = useState(false);

  const [editTask, setEditTask] = useState({});

  const [select, setSelect] = useState("default");

  function handleAddTask(item) {
    setTaskList((task) => [...task, item]);
  }

  function handleEditTaskList(finalList) {
    setTaskList(() => finalList);
  }

  function handleRemoveTask(deltask) {
    setTaskList(taskList.filter((task) => task.title !== deltask.title));
    if (isModelOpen) handleModel();
  }

  function handleModel() {
    setIsModelOpen((model) => !model);
  }

  function handleEdit(curTask) {
    setEditTask(curTask);
  }

  function handleStatusChange(editTask) {
    setTaskList((taskList) =>
      taskList.map((taskItem) =>
        taskItem.title === editTask.title
          ? { ...taskItem, status: !taskItem.status }
          : taskItem
      )
    );
  }

  function handleChange(e) {
    setSelect(() => e.target.value);
  }

  useEffect(
    function () {
      if (select === "completed") {
        setTaskList((tasklist) =>
          [...tasklist].sort((a, b) =>
            a.status === b.status ? 0 : a.status ? -1 : 1
          )
        );
      } else if (select === "uncompleted") {
        setTaskList((tasklist) =>
          [...tasklist].sort((a, b) =>
            a.status === b.status ? 0 : a.status ? 1 : -1
          )
        );
      }
    },
    [select]
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <header>
        {" "}
        <h2>Task Manager</h2>{" "}
      </header>
      <TaskForm onAddTask={handleAddTask} />
      <SortTask selected={select} onSelect={handleChange} />
      <TaskList
        tasklist={taskList}
        onTaskEdit={handleEdit}
        onRemoveTask={handleRemoveTask}
        onToggleModel={handleModel}
        onStatusChange={handleStatusChange}
      />
      {isModelOpen && (
        <TaskEditModel
          className="modal-overlay"
          task={editTask}
          onEdit={(updatedTask) => {
            handleEditTaskList(
              taskList.map((task) =>
                task.title === editTask.title ? updatedTask : task
              )
            );
            handleModel();
          }}
        />
      )}
    </div>
  );
}
