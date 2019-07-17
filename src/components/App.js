/*eslint-disable */
import React from 'react';
import BudgetForm from './BudgetForm/BudgetFormContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpensesTable/ExpensesTableContainer';
import Values from './Values/ValuesContainer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </div>
  );
};

export default App;
