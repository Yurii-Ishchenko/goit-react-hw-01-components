import React from 'react';
import s from './Todo.module.css';
import Todo from '../Todo/Todo';

export default function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className={s.todo_list}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <Todo
            text={text}
            completed={completed}
            onDeleteTodo={() => onDeleteTodo(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
}
