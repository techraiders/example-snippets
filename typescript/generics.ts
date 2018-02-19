function clone<T>(obj: T): T   {
  let serialized = JSON.stringify(obj);
  return JSON.parse(obj);
}

clone('Hello!');
clone(123);

var todo: Todo = {
  id: 1, name: 'Pick up drycleaning', state: TodoState.Active
};
clone(todo);


var array: number[] = [1,2,3],
    array2: Array<number> = [1,2,3];



class KeyValuePair<TKey, TValue> {
  constructor(public key: TKey, public value: TValue) {};
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now());
let pair3 = new KeyValuePair<number, string>(3, 'Third');


class KeyValuePairPrinter<T, U> {
  constructor(private pairs: KeyValuePair<T, U>[]) {}
  
  print() {
    for (let p of this.pairs) {
      console.log(`${p.key}: ${p.value}`);
    }
  }
}

var printer = new KeyValuePairPrinter([pair1, pair3]);
printer.print();
