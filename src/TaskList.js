import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TaskList({
  tasklist,
  onRemoveTask,
  onTaskEdit,
  onToggleModel,
  onStatusChange
}) {
  return (
    <ul>
      {tasklist.map((task) => (
        <TaskItem
          key={task.title}
          task={task}
          title={task.title}
          status={task.status}
          onEditTask={(taskItem) => {
            onToggleModel();
            onTaskEdit(taskItem);
            
          }}
          onRemoveTask={onRemoveTask}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
}
