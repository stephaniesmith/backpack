import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class GearList extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        {list.map(({ name }, i) => <h2 key={i}>{name}</h2>)}
      </div>
    );
  }
}
