import PropTypes from 'prop-types';
import s from './Statistics.module.css';
// import StatisticsList from './StaticticList';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
// export default function Statistics({ title, stats }) {
//     return (
//       <section className="statistics">
//         {title && <h2>{title}</h2>}
//         <StatisticsList items={stats} />
//       </section>
//     );
//   }
