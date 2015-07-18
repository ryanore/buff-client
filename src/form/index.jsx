import React from 'react';
import Application from './components/Application';
/**
 * Main Entry for Buff form
 * Import Application and mount/unmount it on demand
 */
export default class Buff {
  constructor(id) {
    this.appId = id;
    this.rootNode = document.getElementById('buff');
  }

  mount() {
    if (this.rootNode) {
      React.render(<Application appid="{this.appid}" />, this.rootNode);
    } else {
      throw new Error('The element #buff-contents does not exist.');
    }
    return this;
  }

  unMount() {
    React.unmountComponentAtNode(this.rootNode);
    return this;
  }
}

let b = new Buff('123');
b.mount();
