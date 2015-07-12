import React from 'react';
import './temp.scss';
/**
 * Main Application
 * State should be passed in from index
 * Configuration
 */
export default React.createClass({
  componentDidMount() {
    // console.log('Component did mount');
  },
  render() {
    return (
      <div>
        Hello react!
        <p>Need modal</p>
        <p>component will mount when called externally,  and unmount when closed internally.  Can be unmounted externally as well</p>
      </div>
    );
  }
});
