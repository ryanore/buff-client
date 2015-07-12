import './formContainer.scss';
import pubsub from '../pubsub';

export default class Trigger {

  constructor(id) {
    this.el = null;
    pubsub.on('trigger-load', this.build.bind(this));
  }

  handleClickClose(e) {
    pubsub.trigger('close-modal');
  }
  /**
   * Build a DOM element to be clicked.
   */
  build() {
    if (this.el) return;

    this.el = document.createElement('div');
    this.el.id = 'buff-container';

    let inner = document.createElement('div');
    inner.id = 'buff-modal';
    this.el.appendChild(inner);

    let close = document.createElement('div');
    close.id = 'buff-close';
    inner.appendChild(close);

    let content = document.createElement('div');
    content.id = 'buff-contents';
    inner.appendChild(content);

    document.body.appendChild(this.el);
    pubsub.on('loading-state', this.handleLoadingState.bind(this));
    close.addEventListener('click', this.handleClickClose);
  }

   /**
   * Set any visual cue for loading state.
   */
  handleLoadingState(data) {
    this.el.setAttribute('data-state', data.state);
  }
}

