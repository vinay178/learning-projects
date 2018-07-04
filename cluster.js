let os = require('os')
let cluster = require('cluster')
let Worker = require('./cluster-worker')

class Cluster {

  constructor () {
    console.log(cluster.isMaster);
    if (cluster.isMaster) {
      this.fork();
    }
    else {
      new Worker();
    }
  }

  fork () {
    let cpus = os.cpus().length;
    for (let i = 0; i < cpus; i++) {
      cluster.fork();
    }
  }
}
console.log("called")
new Cluster();