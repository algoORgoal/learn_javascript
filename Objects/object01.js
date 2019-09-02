var myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'
myCar.year = 1969
console.log(myCar)
console.log(myCar.color)

var yourPhone = {
    make: 'Samsung',
    model: 'Galaxy S10',
    year: '2019',
}
console.log(yourPhone)

var ourGuitar = new Object()
ourGuitar['make'] = 'Gibson'
ourGuitar['model'] = 'unknown'
ourGuitar['year'] = '1900'
console.log(ourGuitar)

var theirMouth = new Object(),
    state = 'normal',
    size = 100

theirMouth[state] = 'always hungry'
theirMouth[size] = 200
console.log(theirMouth)
console.log(theirMouth.state)
console.log(state)
