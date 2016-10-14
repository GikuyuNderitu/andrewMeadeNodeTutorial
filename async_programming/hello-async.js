/*setTimeout(()=> {
  console.log('1')
}, 2000);
setTimeout(()=> {
  console.log('4')
}, 1000);
console.log('2');
*/

console.log('Challenge Begin');

let printInTwoSeconds=function (msg) {
  setTimeout(function () {
    console.log(msg);
  }, 2000);
}

printInTwoSeconds('Hello Async!')
