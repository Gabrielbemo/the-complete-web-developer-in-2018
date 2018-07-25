// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'turtle';
let rabbit = 'rabbit';

// it should look like this:
'     ||<- Start line'
'       turtle'
'       rabbit'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(10);
rabbit = rabbit.padStart(10);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// Ele remove os espaços em branco e adiciona caracteres = no final da string até a string conter tamanho 9;
// 'turtle==='

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(" ")
