import s from './IconButton.module.css';

export default function IconButton({ children, onClick, ...alyProps }) {
  return (
    <button
      type="button"
      className={s.iconButton}
      onClick={onClick}
      {...alyProps}
    >
      {children}
    </button>
  );
}
