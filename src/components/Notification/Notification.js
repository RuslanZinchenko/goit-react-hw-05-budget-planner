import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notification = ({ text }) => <span className={styles.text}>{text}</span>;

Notification.propTypes = {
  text: PropTypes.string.isRequired
};

export default Notification;
