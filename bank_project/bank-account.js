//This project simulates some of the features of a bank account

//This var manages all of the accounts in the bank
let bank = []

//This function accepts a name param, creates an account and adds teh account to the accounts in the bank
let addUser = function(name){
	let exists = getAccount(name)

	let createAccount = function(){

		return {
			userName: name,
			balance: 0
		}
	}

	if(typeof exists === 'undefined'){
		bank.push(createAccount())
		console.log('Created account with name ' + name+'.');
	}
	else {
		console.log('This account with username '+name+' already exists');
	}
}

let accountAction = function(){
	addUser('Gikuyu')
	addUser('Lydia')
	addUser('Gikuyu')

	deposit(bank[0],5100)
	withdraw(bank[0],4100)
	deposit(bank[1],140102)
	console.log(getBalance(bank[0]))
	console.log(getAccount('Lydia'));
}

let getAccount = function(name){
	return bank.find((item) => {return item.userName === name})
}

let deposit = function(act, val){
	act.balance += val
}

let withdraw = function(act, val){
	act.balance -= val
}

let getBalance = function (act) {
	return act.balance
}


accountAction()
