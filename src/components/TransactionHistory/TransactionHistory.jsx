import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = props => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.tableTitle}>Type</th>
          <th className={style.tableTitle}>Amount</th>
          <th className={style.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {props.items.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
