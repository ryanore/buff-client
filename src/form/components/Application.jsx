import React from 'react';
import AltContainer from 'alt/AltContainer';
import ConfigStore from '../stores/ConfigStore';
import ConfigActions from '../actions/ConfigActions';
import BuffForm from './Form/Form';

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

  /**
   * Form in DOM
   * Get Data, cached of course
   */
  componentDidMount() {
    ConfigActions.fetchConfig();
  }

  render() {
    return (
      <div id="buff-backdrop">
        <div className="container-fluid" id="buff-form-container">
          <AltContainer store={ConfigStore}>
            <BuffForm />
          </AltContainer>
        </div>
      </div>
    );
  }
}
