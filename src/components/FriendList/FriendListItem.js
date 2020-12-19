import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.friends}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
