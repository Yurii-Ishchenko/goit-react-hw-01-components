// import PropTypes from 'prop-types';
export default function StatisticList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}
