//Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols
let str = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.';
let words = str.split(/\s/);
console.log(words.filter(w => w.length > 2 && w.charAt(0)==='t'));



//Write a program which will output in the console the sum of the squres of even numbers
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.filter( n => n%2==0).map(n => n**2).reduce((acc,res) => acc + res);
console.log(`sum=${sum}`);




