import React from 'react';
import s from './test.module.css';

export default function Value({ value }) {
  return <span className={s.value}>{value}</span>;
}
