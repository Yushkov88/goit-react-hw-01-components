import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = props => {
  return (
    <li className={style.item}>
      <span
        className={props.isOnline ? `${style.online} ` : `${style.offline}`}
      ></span>
      <img
        className={style.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.name}>{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
