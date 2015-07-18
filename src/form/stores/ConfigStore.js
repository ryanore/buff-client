import alt from '../alt';
import ConfigActions from '../actions/ConfigActions';

class ConfigStore {

  constructor() {
    this.appConfig = {};
    this.bindListeners({
      handleFetchConfig: ConfigActions.FETCH_CONFIG,
      handleConfigLoaded: ConfigActions.UPDATE_CONFIG
    });
  }

  handleConfigLoaded(data) {
    this.appConfig = data;
  }

  handleFetchConfig() {
    this.appConfig = null;
  }
}

export default alt.createStore(ConfigStore, 'ConfigStore');
