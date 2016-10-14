//This project simulates some of the features of a bank account

//This var manages all of the accounts in the bank
let bank = []

//This function accepts a name param, creates an account and adds teh account to the accounts in the bank
let addUser = function(name){
	let exists = getAccount(name)

	let createAccount = function(){

		return {
			userName: name,
			balance: 0,
			deposit: function (val){
				if(typeof val !== 'number')
					console.log('Deposit failed, amount is not a number');
				else
					this.balance += val
			},
			withdraw: function (val){
				if(typeof val !== 'number')
					console.log('Withdraw failed, amount is not a number');
				else
					this.balance -= val
			}
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

	let g = getAccount('Gikuyu')
	let l = getAccount('Lydia')

	g.deposit(300)
	g.deposit(200)
	l.deposit(2000)
	g.withdraw(100)
	l.withdraw(1999)
	l.withdraw('Many Dollars')

	let kuyuBalance = createBalanceGetter(g)
	let diaBalance = createBalanceGetter(l)

	console.log(kuyuBalance())
	console.log(diaBalance())


}

let getAccount = function(name){
	return bank.find((item) => {return item.userName === name})
}

let deposit = function(val){
	act.balance += val
}

let withdraw = function(val){
	act.balance -= val
}

let createBalanceGetter= function(act){
	let getBalance = function () {
		return act.balance
	}

	return getBalance
}


accountAction()
