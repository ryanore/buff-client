import React from 'react';
import Application from './components/Application';

class Buff {
  constructor() {
    this.rootNode = document.getElementById('buff-contents');
  }

  mount() {
    if (this.rootNode) {
      React.render(<Application />, this.rootNode);
    } else {
      throw new Error('The element #buff-contents does not exist.');
    }
  }

  unMount() {
    React.unmountComponentAtNode(this.rootNode);
  }
}

window.BUFF.form = new Buff();
