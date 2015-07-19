import alt from '../alt';
import ConfigActions from '../actions/ConfigActions';

class ConfigStore {

  constructor() {
    this.appConfig = {};
    this.bindListeners({
      handleFetchConfig: ConfigActions.FETCH_CONFIG
    });
  }

  handleConfigLoaded(data) {
    this.appConfig = data;
  }

  handleFetchConfig(data) {
    this.appConfig = data;
  }
}

export default alt.createStore(ConfigStore, 'ConfigStore');
