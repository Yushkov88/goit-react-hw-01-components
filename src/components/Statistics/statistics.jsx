import React from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css';

const Statistics = props => {
  return (
    <section className={style.statistics}>
      {props.title ? <h2 className={style.title}>{props.title}</h2> : null}
      <ul className={style.statList}>
        {props.stats.map(element => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);

          return (
            <li
              className={style.item}
              key={element.id}
              style={{
                backgroundColor: `#${randomColor}`,
                borderRadius: '5px',
              }}
            >
              <span className="label">{element.label}</span>
              <span className={style.percentage}>{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
