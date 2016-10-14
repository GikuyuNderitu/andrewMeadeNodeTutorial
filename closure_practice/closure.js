let createAdder = function(num){
	let add = function(numToAdd){
		return num + numToAdd
	}

	return add
}

let add20 = createAdder(20)

console.log(add20(5))
console.log(add20(20))
