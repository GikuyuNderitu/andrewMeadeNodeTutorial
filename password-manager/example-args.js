let argv= require('yargs')
.command('hello', 'Greets user', (yargs)=>{
	yargs.option({
		name:{
			demand: true,
			alias: 'n',
			description: 'Your first name goes here'
		},
		lastName:{
			demand: false,
			alias: 'l',
			description: 'Your last name goes here'
		}

	})
})
.argv
let command = argv._[0]

if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastName !== 'undefined')
	console.log('Hello ' + argv.name + ' '+argv.lastName);
else if(command === 'hello' && typeof argv.name !== 'undefined')
	console.log(command + ' '+ argv.name)
else if (command === 'hello') {
	console.log('Hello World');
}else {
	console.log('Invalid command!');
}
