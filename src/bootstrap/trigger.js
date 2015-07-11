import './buffstrap.scss';
import pubsub from './pubsub';

export default class BuffTrigger {

  constructor(id) {
    this.el = this.buildTrigger();
  }

  /**
   * Build a DOM element to be clicked.
   */
  buildTrigger() {
    let el = document.createElement('div');
    el.classList.add('buff_trigger');
    el.addEventListener('click', handler => this.handleClick());
    document.body.appendChild(el);
    return el;
  }

  handleClick() {
    pubsub.trigger('trigger-load', {type: 'form'});
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

