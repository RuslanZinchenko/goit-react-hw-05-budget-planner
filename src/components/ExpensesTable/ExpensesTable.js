/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ExpensesTable.module.css';

const ExpensesTable = ({ expenses = [], deleteExpense }) => {
  return (
    expenses.length > 0 && (
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Expense name</th>
            <th className={styles.th}>Expense amount</th>
            <th className={styles.th} />
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr className={styles.tr} key={id}>
              <td className={styles.td}>{name}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>
                <Button label="Delete" onClick={() => deleteExpense(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

ExpensesTable.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
};

export default ExpensesTable;
