import './buffstrap.scss';
import Trigger from './trigger.js';
import FormContainer from './formContainer.js';
import pubsub from './pubsub.js';

class Bootstrap {

  constructor(id) {
    this.appId = id;
    this.scriptUrl = '/assets/buff.js';
    this.configUrl = `/stubConfig${id}.json`;
    this.loaded = false;
    this.trigger = new Trigger();
    this.formContainer = new FormContainer();
    pubsub.on('trigger-load', handler => this.handleTrigger());
  }

  /**
   * Click Handler
   * Simulate load time for now.
   */
  handleTrigger() {
    if (this.loaded) {
      return false;
    }
    setTimeout(function() {
      this.loadScript();
    }.bind(this), 1400);
  }

  /**
   * Load the form code.
   */
  loadScript() {
    pubsub.trigger('loading-state', {state: 'loading'});

    let myScript = document.createElement('script');
    myScript.setAttribute('type', 'text/javascript');
    myScript.setAttribute('src', this.scriptUrl);

    myScript.onload = function() {
      pubsub.trigger('form-loaded');
    };

    document.getElementsByTagName('head')[0].appendChild(myScript);
  }
}

export default new Bootstrap('001');
