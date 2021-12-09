// class Marker {
//   static consuption = 0.5;
//   static colorList = ['red', 'blue', 'green'];
//   #color;
//   inkLevel = 100;
  
//   constructor(valueColor) {
//     this.color = valueColor;
//   }

//   set color(value) {
//     // if (tipeOf(value) == value) // перевірка на строку
//     if (Marker.colorList.includes(value)) {
//       this.#color = value;
//     } else {
//       console.log(`is not a color: ${Marker.colorList.join(', ')}`);
//     }
//   }

//   get color() {
//     return this.#color;
//   }
//   print(text) {
//     console.log(text);
//   }
// }

// const myMarker = new Marker(123);
// // const myMarker = new Marker('blue');

// console.log(myMarker.color);







class Marker {
  static consuption = 0.5;
  static colorList = ['red', 'blue', 'green'];
  #color;
  inkLevel = 100;
  
  constructor(valueColor) {
    this.color = valueColor;
  }

  set color(value) {
    // if (tipeOf(value) == value) // перевірка на строку
    if (Marker.colorList.includes(value)) {
      this.#color = value;
    } else {
      this.#printError();
    }
  }

  get color() {
    return this.#color;
  }

  print(text) {
    if (this.)
  }

  print(text) {
    console.log(`is not a color: ${Marker.colorList.join(', ')}`);
  }
}

const myMarker = new Marker('bue');
myMarker.print('asddff');