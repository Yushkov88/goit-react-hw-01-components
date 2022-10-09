import React from 'react';
import style from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={style.avatar}
          width="100"
          height="100"
        />
        <span className={style.name}>
          <p className={style.overview}>{props.username}</p>
        </span>
        <p className={style.overview}>{props.tag}</p>
        <p className={style.overview}>{props.location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{props.stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{props.stats.views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
