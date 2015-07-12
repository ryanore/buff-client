import './trigger.scss';
import pubsub from '../pubsub';

export default class BuffTrigger {

  constructor(id) {
    this.el = this.build();
  }

  /**
   * Build a DOM element to be clicked.
   */
  build() {
    if (typeof this.el !== 'undefined') {
      return false;
    }
    let el = document.createElement('div');
    el.classList.add('buff-trigger');
    el.addEventListener('click', handler => this.handleClick());
    pubsub.on('loading-state', this.handleLoadingState.bind(this));
    document.body.appendChild(el);
    return el;
  }

  handleClick() {
    pubsub.trigger('trigger-load', {type: 'form'});
  }

  /**
   * Set any visual cue for loading state.
   */
  handleLoadingState(data) {
    this.el.setAttribute('data-state', data.state);
    return;
  }

}

