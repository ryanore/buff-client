import React from 'react';
import AltContainer from 'alt/AltContainer';
import ConfigStore from '../stores/ConfigStore';
import ConfigActions from '../actions/ConfigActions';
import BuffForm from './BuffForm';
import './temp.scss';

/**
 * Main Application
 * State should be passed in from index
 * Configuration
 */
export default class extends React.Component{
  constructor() {
    super();
    let state = {
      config: ConfigStore.getState()
    };
    this.state = state;
  }

  componentDidMount() {
    ConfigActions.fetchConfig();
  }

  render() {
    return (
      <AltContainer store={ConfigStore}>
        <BuffForm />
      </AltContainer>
    );
  }
}
