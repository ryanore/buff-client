import './buffstrap.scss';
import pubsub from './pubsub';

export default class Trigger {

  constructor(id) {
    pubsub.on('trigger-load', this.buildContainer);
  }

  /**
   * Build a DOM element to be clicked.
   */
  buildContainer() {
    let el = document.createElement('div');
    el.id = 'buff-container';
    document.body.appendChild(el);
    return el;
  }

  /**
   * Set any visual cue for loading state.
   */
  handleLoadingState(loading) {
    if (loading) {
      this.el.classList.add('loading');
    } else {
      this.el.classList.remove('loading');
    }
  }

}

