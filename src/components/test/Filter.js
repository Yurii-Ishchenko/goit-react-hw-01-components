import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Фильтрация по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
