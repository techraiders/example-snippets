const util = require('util'),
      EventEmitter = require('events').EventEmitter;

function Resource (m) {
  let maxEvents = m,
      self = this;

  process.nextTick(() => {
    let count = 0;
    self.emit('start');
    let t = setInterval(() => {
      self.emit('data', ++count);
      if (count === maxEvents) {
        self.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
}

util.inherits(Resource, EventEmitter);
module.exports = Resource;