import React from 'react';
import s from './test.module.css';

export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div className={s.controls}>
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
}
