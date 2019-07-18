import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Notification from '../Notification/Notification';
import styles from './ExpenseForm.module.css';

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
    incorrectName: false,
    incorrectAmount: false,
  };

  static propTypes = {
    addExpense: PropTypes.func.isRequired,
  };

  handleChangeName = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeAmount = e => {
    this.setState({
      [e.target.name]: Math.abs(e.target.value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    if (!/[a-zA-Z]/.test(name) || !(name.length >= 3)) {
      this.setState({ incorrectName: true });
      return;
    }

    if (Number(amount) === 0) {
      this.setState({ incorrectAmount: true });
      return;
    }
    this.setState({ incorrectName: false, incorrectAmount: false });
    const formatedAmount = parseFloat(Number(amount).toFixed(2));
    const { addExpense } = this.props;
    addExpense(name, formatedAmount);

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount, incorrectName, incorrectAmount } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label className={styles.expenseForm}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeName}
          />
        </Label>
        {incorrectName && (
          <Notification text=" The name must contain Latin letters and be longer than 2 characters." />
        )}
        <Label className={styles.expenseForm}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChangeAmount}
          />
        </Label>
        {incorrectAmount && (
          <Notification text="Quantity must be greater than 0" />
        )}

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
