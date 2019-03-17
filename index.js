// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return (2 * Math.PI) * this.radius;
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  get area() {
    return Math.PI * (this.radius * this.radius);
  }

  set area(area) {
    this.radius = (Math.sqrt(area)) / Math.PI;
  }
}

// class Bird {
//   constructor(name) {
//     this.name = name;
//   }
//
//   set phrase(phrase) {
//     this._phrase = phrase;
//   }
//
//   get speak() {
//     return `${this.name} says ${this._phrase || 'squawk'}`;
//   }
// }
//
// let daffy = new Bird('Daffy');
