import './buffstrap.scss';
import pubsub from './pubsub.js';
import Trigger from './components/trigger.js';
import FormContainer from './components/formContainer.js';

class Bootstrap {

  constructor(id) {
    if (window) {
      this.BUFF = window.BUFF = window.BUFF || {};
      this.BUFF.bootstrap = this;
    }
    this.form = null;
    this.appId = id;
    this.scriptUrl = '/assets/buff.js';
    this.configUrl = `/stubConfig${this.appId}.json`;
    this.loaded = false;
    this.trigger = new Trigger();
    this.formContainer = new FormContainer();
    pubsub.on('trigger-load', handler => this.handleTrigger());
    pubsub.on('form-loaded', handler => this.handleFormLoaded());
  }

  handleFormLoaded() {
    this.form = window.BUFF.form;
    this.form.mount();
  }

  /**
   * Load the form code.
   */
  loadScript() {
    pubsub.trigger('loading-state', {state: 'loading'});
    let myScript = document.createElement('script');

    myScript.setAttribute('type', 'text/javascript');
    myScript.setAttribute('src', this.scriptUrl);

    myScript.onload = function(e) {
      pubsub.trigger('form-loaded');
      pubsub.trigger('loading-state', {state: 'loaded'});
      this.loaded = true;
    }.bind(this);

    document.getElementsByTagName('head')[0].appendChild(myScript);
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
}

export default new Bootstrap('001');
