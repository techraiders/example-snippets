const EventEmitter = require('events').EventEmitter;

const getResource = function (c) {
  var e = new EventEmitter();

  process.nextTick(() => {
    var count = 0;
    e.emit('start');
    var t = setInterval(() => {
      e.emit('data', ++count);
      if (count === c) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });

  return (e);
};

var r = getResource(5);

r.on('start', () => {
  console.log('I have started!');
});

r.on('data', (d) => {
  console.log('I have received data -> ' + d);
});

r.on('end', (t) => {
  console.log('I am done, with ' + t + ' data events.');
});
