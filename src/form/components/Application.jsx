import React from 'react';
import './temp.scss';

export default React.createClass({
  componentDidMount() {
    console.log('Component did mount');
  },
  render() {
    return (
      <div>
        Hello react!
      </div>
    );
  }
});
