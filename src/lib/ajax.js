let mockData = {
  appID: '123456'
};

export default class Ajax {
  static getJSON(url) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(mockData);
      }, 250);
    });
  }
}
