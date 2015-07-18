import React from 'react';
import './temp.scss';

/**
 * Main Application
 * State should be passed in from index
 * Configuration
 */
export default class BuffForm extends React.Component{
  static propTypes = {
    appConfig: Object
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (this.props.appConfig) {
      return (
        <div>
          {this.props.appConfig.appID}
        </div>
      );
    } else {
      return (
        <div>
          loading
        </div>
      );
    }
  }
}
