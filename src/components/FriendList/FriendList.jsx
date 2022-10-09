import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className={style.friendList}>
      {props.friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
