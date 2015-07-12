import pubsub from '../pubsub';

export default class Trigger {

  constructor(id) {
    this.el = null;
    pubsub.on('trigger-load', this.build.bind(this));
  }

  /**
   * Build a DOM element to be clicked.
   */
  build() {
    if (this.el) return;

    this.el = document.createElement('div');
    this.el.id = 'buff';

    document.body.appendChild(this.el);
  }
}

