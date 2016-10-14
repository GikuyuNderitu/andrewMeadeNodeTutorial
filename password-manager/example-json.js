let person ={
	name: 'Gikuyu',
	age: 22
}

let personJson = JSON.stringify(person)

console.log('Get ready to rumble!!!!')

let animal = '{"name": "Milo"}'
console.log('JSON var is: ' + animal);

//convert to js object
let animalObj = JSON.parse(animal)
console.log('Objectified' + animalObj);
//add age prop
animalObj.age = 3
//convert back to JSON
animal = JSON.stringify(animalObj)
//log to screen
console.log(animal);
