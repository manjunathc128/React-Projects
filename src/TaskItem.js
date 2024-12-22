import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";

export default function TaskItem({
  title,
  status,
  task,
  onEditTask,
  onRemoveTask,
  onStatusChange
}) {
  return (
    <>
      <li className={status ? "checked" : " "}>
        <span>{title}</span>
        <input type="checkbox" checked={status} onClick={() => onStatusChange(task)} />
        <div className="icons">
          <FontAwesomeIcon icon={faEdit} onClick={() => onEditTask(task)} />
          <FontAwesomeIcon icon={faRemove} onClick={() => onRemoveTask(task)} />
        </div>
      </li>
    </>
  );
}
