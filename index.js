// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return Math.pow(this.radius, 2) * Math.PI
    }

    get circumference() {
        return this.diameter * Math.PI
    }
    get diameter() {
        return this.radius * 2
    }

    set area(newArea) {
        this.radius = newArea / (this.radius * Math.PI)
    }

    set circumference(newCircimference) {
        this.radius = newCircimference / (2 * Math.PI)
    }
    set diameter(newDiamater) {
        this.radius = newDiamater / 2
    }
}