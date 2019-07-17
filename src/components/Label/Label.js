import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = ({ children }) => (
  <div className={styles.labelComponent}>{children}</div>
);

Label.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ).isRequired,
};

export default Label;
