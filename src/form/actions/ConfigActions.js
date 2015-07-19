import alt from '../alt';
import ajax from '../../lib/ajax';

class ConfigActions {
  /**
   * Fetch configuration data
   * First dispatch empty to get a loading indicator
   * Then actually load async data and dispatch data
   */
  fetchConfig() {
    this.dispatch();
    ajax.getJSON('this would be the url of the app configuration')
      .then((config) => {
        this.dispatch(config);
      })
      .catch((errorMessage) => {
        // console.log('error');
      });
  }
}

module.exports = alt.createActions(ConfigActions);
