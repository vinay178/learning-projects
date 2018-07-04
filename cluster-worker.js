class Worker {
  constructor() {

    this.webserver();
  }

  webserver() {
    require('./bin/www');
  }
}
module.exports = Worker;