class PubSub {

  constructor() {
    this.handlers = [];
  }

  trigger(event, data = {}) {
    for (let i = 0; i < this.handlers.length; i++) {
      if (this.handlers[i].event === event) {
        this.handlers[i].handler.call();
      }
    }
  }

  on(evt, func, ctx) {
    let context = (typeof ctx === 'undefined') ? func : ctx;
    this.handlers.push({
      event: evt,
      handler: func.bind(context)
    });
  }

}

export default new PubSub();
