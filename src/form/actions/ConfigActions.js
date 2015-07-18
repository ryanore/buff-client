import alt from '../alt';
import ajax from '../../lib/ajax';

class ConfigActions {
  fetchConfig() {
    this.dispatch();
    ajax.getJSON()
      .then((config) => {
        this.actions.updateConfig(config);
      })
      .catch((errorMessage) => {
        console.log('error');
      });
  }
  updateConfig(config) {
    this.dispatch(config);
  }
}

module.exports = alt.createActions(ConfigActions);
