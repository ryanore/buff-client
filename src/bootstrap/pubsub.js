class PubSub {

  constructor() {
    this.handlers = [];
  }

  trigger(topic, data = {}) {
    for (let i = 0; i < this.handlers.length; i++) {
      if (this.handlers[i].topic === topic) {
        this.handlers[i].handler.call(this, data);
      }
    }
  }

  on(tpc, func, ctx) {
    let context = (typeof ctx === 'undefined') ? func : ctx;
    this.handlers.push({
      topic: tpc,
      handler: func.bind(context)
    });
  }

}

export default new PubSub();
