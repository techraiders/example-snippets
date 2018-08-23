const Resource = require('/resource');

const r = new Resource(7);

r.on('start', () => {
  console.log('I have started');
});

r.on('data', (d) => {
  console.log('I have received data -> ' + d);
});

r.on('end', (t) => {
  console.log('I am done, with ' + t + 'data events')
;});