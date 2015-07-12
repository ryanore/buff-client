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
    this.form = null;
    this.appId = id;
    this.scriptUrl = '/assets/buff.js';
    this.configUrl = `/stubConfig${this.appId}.json`;
    this.loaded = false;
    if (window) {
      this.BUFF = window.BUFF = window.BUFF || {};
      this.BUFF.bootstrap = this;
    }

    this.trigger = new Trigger();
    this.formContainer = new FormContainer();

    pubsub.on('trigger-load', handler => this.handleTrigger());
    pubsub.on('form-loaded', handler => this.handleFormLoaded());
  }

  /**
   * Form script has loaded
   * Tell form to mount
   * TODO:: figure out how to not use windo object.
   */
  handleFormLoaded() {
    this.form = window.BUFF.form;
    this.form.mount();
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
   * Load the form code. Append script tag to head
   * TODO:: is there a better way ? (ajax)
   */
  loadScript() {
    pubsub.trigger('loading-state', {state: 'loading'});
    let formScript = document.createElement('script');

    formScript.setAttribute('type', 'text/javascript');
    formScript.setAttribute('src', this.scriptUrl);

    formScript.onload = function(e) {
      // console.log(e);
      pubsub.trigger('form-loaded');
      pubsub.trigger('loading-state', {state: 'loaded'});
      this.loaded = true;
    }.bind(this);

    document.getElementsByTagName('head')[0].appendChild(formScript);
  }
}

export default new Bootstrap('001');
