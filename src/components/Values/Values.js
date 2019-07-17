import React from "react";
import PropTypes from "prop-types";
import Stat from "../Stats/Stats";
import styles from "./Values.module.css";

const Values = ({ budget, expenses, balance }) => (
  <div className={styles.valuesComponent}>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat
      label="Balance"
      value={balance.toFixed(2)}
      isPositive={balance >= 0}
    />
  </div>
);

Values.propTypes = {
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired
};

export default Values;
