// function Car(make, model, year) {
//     this.make = make
//     this.model = model
//     this.year = year
// }
// var myCar = new Car("LG", "V10", 2019)

// console.log(myCar)

var yourCar = {
    make: undefined,
    model: undefined,
    year: undefined,
    Car: function (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

yourCar.Car("NIKE", "JORDAN", 1990)

console.log(yourCar)