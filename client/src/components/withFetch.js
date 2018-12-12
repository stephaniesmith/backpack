import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  return class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired
    };

    state = {

    };

    componentDidMount() {

    }

    render() {
      return <Component {...this.props}/>;
    }
  };
};
