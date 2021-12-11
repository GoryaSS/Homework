const arr = ['s', 'a', 'd'];

arr.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

// (a, b) => a - b

console.log(arr);

const langArray = [
  { value: 'UA', label: 'Ukranian' },
  { value: 'RU', label: 'Russian' },
  { value: 'BL', label: 'Russian' },
  { value: 'EN', label: 'English' },
];

console.log(
  langArray
    .map(function (item) {
      return [item.label, item.value];
    })
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
      return 0;
    })
);

langArray.sort((a, b) => {
  if (a.label > b.label) return 1;
  else if (a.label < b.label) return -1;

  if (a.value > b.value) return 1;
  else if (a.value < b.value) return -1;

  return 0;
});

console.log(langArray);

arr.sort(function (a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

let productsList = [
  {
    name: 'Яблоко',
    count: 3,
    bought: false,
    price: 1,
  },

  {
    name: 'Кофе',
    count: 1,
    bought: true,
    price: 20,
  },
  {
    name: 'Мясо',
    count: 1,
    bought: false,
    price: 10,
  },
];

// let res = productsList.filter(item=>!item.bought).map(item=>item.name);

let res = [];
productsList.forEach(function (item, index) {
  if (!item.bought) {
    res.push(`${index + 1} - ${item.name}`);
  }
});
console.log(res);

let ar1 = [true, false, true, false];

console.log(ar1.sort().reverse());

class Course {
  #topic;
  constructor(courseTopic, courseDuring) {
    this.#topic = courseTopic;
    this.during = courseDuring;
  }
  print() {
    console.log(`${this.#topic} - ${this.during}`);
  }
}

const myCourse = new Course('TSsdsfsdfdsfsdf', 16);
myCourse.print();

class Mmmmmm {
  static PI = 3.14;
  name;

  constructor(enteredName) {
    this.name = enteredName;
  }

  static print() {
    console.log('Rett' + this.PI);
  }

  work() {
    M.print();
    console.log('TTTT');
  }
}

let obj = new Mmmmmm('Tymur');

console.log(obj);
console.log('Marker: ', Mmmmmm.PI);









class Circle {
  #radius;

  constructor(inputValue) {
    this.radius = inputValue;
  }

  set radius(value) {
    if (value > 0) {
      this.#radius = value;
    } else {
      this.#radius = 0;
    }
  }

  get radius() {
    return this.#radius;
  }
}

const circle_1 = new Circle(77);
console.log(circle_1.radius);

// get set это модификаторы которые делают из метода - свойство
// к которому в объекте надо обращаться как к свойству (без круглых скобок)



class Course {
  constructor(courseTopic, courseDuring) {
    this.topic = courseTopic;
    this.during = courseDuring;
  }
  print() {
    console.log(`${this.topic} ${this.during}`);
  }
}

class Group extends Course {
  constructor(topic, during, groupAmout) {    
    super(topic, during);
    this.amount = groupAmout;
  }

  print(){
    console.log("-----------------");
  }
}




const Gr1 = new Group("JS", 4.5, 13)
console.log(Gr1);
Gr1.print();













class Course {
  #during = 2;
  constructor(courseDuring) {
    this.during = courseDuring;
  }
  set during(value) {
    if (value > 0 && value <= 6) this.#during = value;
  }
  get during() {
    return this.#during;
  }
}
const myCourse = new Course(-8);
console.log(myCourse.during);
