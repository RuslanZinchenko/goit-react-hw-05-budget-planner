import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Stats.module.css';

const Container = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

const Stat = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value}&nbsp;&#x24;</p>
  </Container>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isPositive: PropTypes.bool,
};

Stat.defaultProps = {
  isPositive: false,
};

export default Stat;
