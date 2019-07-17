import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './BudgetForm.module.css';

export default class BudgetForm extends Component {
  state = { budget: '' };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { budget } = this.state;
    const { onSave } = this.props;

    onSave(Number(budget).toFixed(2));

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label className={styles.budgetForm}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
