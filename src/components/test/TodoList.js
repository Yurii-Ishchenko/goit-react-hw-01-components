import React from 'react';
import s from './Todo.module.css';

export default function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className={s.todo_list}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}
