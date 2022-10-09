import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistoryItem = props => {
  return (
    <tr>
      <td className={style.tableCell}>{props.type}</td>
      <td className={style.tableCell}>{props.amount}</td>
      <td className={style.tableCell}>{props.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
