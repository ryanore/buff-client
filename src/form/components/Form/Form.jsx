import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import './form-container.scss';

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
    // console.log(this.props);
  }

  render() {
    if (this.props.appConfig) {
      return (
        <form className='form-horizontal'>
          <legend>AppId: {this.props.appConfig.appID}</legend>
          <Input type='text' label='Text' labelClassName='col-xs-12 col-sm-3' wrapperClassName='col-xs-12 col-sm-9' />
          <Input type='textarea' label='Textarea' labelClassName='col-xs-12 col-sm-3' wrapperClassName='col-xs-12 col-sm-9' />
          <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-10 col-sm-offset-0 col-sm-12' help='Offset is applied to wrapper.' />
        </form>
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
