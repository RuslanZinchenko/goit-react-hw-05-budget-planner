import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type = "button", label = "", onClick = () => null }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => null,
  type: "button",
  label: ""
};

export default Button;
