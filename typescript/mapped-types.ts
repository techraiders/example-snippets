interface Warrior {
  name: string;
  weapon: string;
  strength: number;
}

type Category<T> = {
  [P in keyof T]? : T[P];
};

type Samurai = Catetory<Warrior>;

let samurai1: Samurai = {
  name: 'Samurai1',
  weapon: 'staff'
}

console.log(samurai1);
