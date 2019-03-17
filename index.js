const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius
  }

get diameter() {
  return this.radius * 2
}

get circumference() {
  return pi * this.diameter
}

get area() {
  return pi * (this.radius * this.radius)
}

set diameter(newDiameter) {
  return this.radius = newDiameter / 2
}

set circumference(newCircumference) {
  let diameter = newCircumference / pi
  return this.radius = diameter / 2
}

set area(newArea) {
  let radiusSquared = newArea / pi
  return this.radius = Math.sqrt(radiusSquared)
}

}
