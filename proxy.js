console.clear();

const wrap = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
      console.log(`Reading property ${propKey}`);
      return target[propKey];
    }
  });
}

console.log(wrap);

const object = {message: 'Hello world'};
const wrapped = wrap(object);

console.log(wrapped.message);
