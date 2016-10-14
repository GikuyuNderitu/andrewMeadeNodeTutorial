console.log('Let the programs begin!');

let crypt = require('crypto-js')
let storage = require('node-persist')
let argv = require('yargs')
	.command('create', 'Creates a new account',(yargs)=>{
		yargs.option({
			name: {
				demand: true,
				alias: 'n',
				description: 'The name of the account goes here',
				type: 'string'
			},
			userName: {
				demand: true,
				alias: 'u',
				description: 'Your username for the account goes here',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Your password for your username goes here',
				type: 'string'
			},
			master: {
				demand: true,
				alias: 'm',
				description: 'Master Password',
				type: 'string'
			}
		}).help('help')
	}).help('help')
	.command('get','Gets an account \("-n"\)',(yargs)=>{
		yargs.option({
			name: {
				demand: true,
				alias: 'n',
				description: 'The name of the account you\'re looking for',
				type: 'string'
			},
			master: {
				demand: true,
				alias: 'm',
				description: 'Master Password',
				type: 'string'
			}
		}).help('help')
	})
	.command('all', 'Returns the entire accounts file')
	.help('help')
	.argv
let command = argv._[0]
storage.initSync()

let saveAccounts = function(accounts){
	let passcode = arguments[1]
	let encrypted = crypt.AES.encrypt(JSON.stringify(accounts), passcode)

	storage.setItemSync('accounts', encrypted.toString())
}

let getAccounts = function(){
	//set var accounts to retrieve the data from the accounts file
	let accounts = storage.getItemSync('accounts')

	//if the file did not exist, initialize accounts to an array
	//else decrypt the data passed by the
	if(typeof accounts === 'undefined'){
		accounts = []
	}else{
		let bytes = crypt.AES.decrypt(accounts,arguments[0])
		accounts = JSON.parse(bytes.toString(crypt.enc.Utf8))
	}

	return accounts
}

let createAccount = function (account){
	let accounts = getAccounts(arguments[1])


	accounts.push(account)
	console.log(accounts)
	saveAccounts(accounts, arguments[1])

	return account
}

let getAccount = function (accountName) {
	let accounts = getAccounts(arguments[1])

	return accounts.find((item) => {return item.name === accountName})
}



if(command ==='create' && argv.name.length> 2 && argv.userName.length > 2&&argv.password.length>7){
	createAccount({
		name: argv.name,
		userName: argv.userName,
		password: argv.password
	}, argv.master)
}else if(command ==='create'&&(argv.name.length <=2||argv.userName.length<=2||argv.password.length<=7))
	console.log('insufficient argument length')

if(command === 'get' && argv.name.length > 2)
	console.log(getAccount(argv.name, argv.master))
if(command == 'all')
	console.log(JSON.parse(crypt.AES.decrypt(storage.getItemSync('accounts'),argv.master).toString(crypt.enc.Utf8)))
