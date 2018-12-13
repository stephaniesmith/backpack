import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  return class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired
    };

    state = {
      data: null
    };

    componentDidMount() {
      const promise = this.props.fetch();
      if(!promise || typeof promise.then !== 'function') return;

      promise
        .then(data => this.setState({ data }));
    }

    render() {
      const props = { ...this.props, data: this.state.data };
      return <Component {...props}/>;
    }
  };
};
