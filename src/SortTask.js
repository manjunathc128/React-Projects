export default function SortTask({ selected, onSelect }) {
  return (
    <select
      className="form-select form-select-sm"
      style={{ width: "200px" }}
      value={selected}
      onChange={(e) => onSelect(e)}
    >
      <option value="default">Default</option>
      <option value="completed">completed Task</option>
      <option value="uncompleted">uncompleted Task</option>
    </select>
  );
}
