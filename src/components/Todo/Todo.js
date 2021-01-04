import { ReactComponent as DeleteIcon } from '../../Icons/delete.svg';
import IconButton from '../IconButton/IconButton';

export default function Todo({
  text,
  completed,
  onToggleCompleted,
  onDeleteTodo,
}) {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p>{text}</p>
      <IconButton onClick={onDeleteTodo}>
        <DeleteIcon width="32" height="32" fill="white" />
      </IconButton>
      {/* <button onClick={onDeleteTodo}>Удалить</button> */}
    </>
  );
}
