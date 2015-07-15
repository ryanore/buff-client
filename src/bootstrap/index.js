import './buffstrap.scss';
import pubsub from './pubsub.js';
import Trigger from './components/trigger.js';
import FormContainer from './components/formContainer.js';

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
      this.buff = require('../form/index.jsx');
      this.buff.mount();
      pubsub.trigger('loading-state', {state: 'loaded'});
    });
  }
}

export default new Bootstrap('001');
