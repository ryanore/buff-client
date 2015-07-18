import './buffstrap.scss';
import pubsub from './pubsub';
import Trigger from './components/trigger';
import FormContainer from './components/formContainer';
import TEST_ID from '../config/app_id';

class Bootstrap {
  /**
   * Constructor
   * @param  {String} id Required is the unique id for the app/website for loading configuration data
   */
  constructor(id) {
    this.appId = id;
    this.buff = null;
    this.loaded = false;
    this.trigger = new Trigger();
    this.formContainer = new FormContainer();
    pubsub.on('trigger-load', handler => this.loadBuffAndMount());
  }

  /**
   * Click Handler
   * Simulate load time for now.
   */
  handleTrigger() {
    if (!this.loaded) {
      this.loadScript();
    }
  }

  /**
   * By using ensure, Webpack knows to chunk the form and loads async for us
   */
  loadBuffAndMount() {
    pubsub.trigger('loading-state', {state: 'loading'});
    require.ensure([], () => {
      let Buff = require('../form/index.jsx');
      this.buff = new Buff(TEST_ID);
      this.buff.mount();
      pubsub.trigger('loading-state', {state: 'loaded'});
    });
  }
}

export default new Bootstrap('001');
