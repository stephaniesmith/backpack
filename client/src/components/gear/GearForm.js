import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
  brand: '',
  type: '',
  weight: null
};

export default class GroupForm extends PureComponent {
  static propTypes = {
    gear: PropTypes.object,
    label: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps({ gear }, { edit }) {
    if(edit) return null;

    return {
      edit: gear ? { ...gear } : { ...defaultState }
    };
  }

  state = {
    edit: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { label } = this.props;
    const { name, brand, type, weight } = this.state.edit;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" value={name}></input>
        <label htmlFor="brand">Brand:</label>
        <input name="brand" type="text" value={brand}></input>
        <label htmlFor="type">Type:</label>
        <input name="type" type="text" value={type}></input>
        <label htmlFor="weight">Weight:</label>
        <input name="weight" type="number" value={weight}></input>
        <button type="submit">{label}</button>
      </form>
    );
  }

}
