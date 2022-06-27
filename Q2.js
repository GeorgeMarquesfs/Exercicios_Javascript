// Questão 2 ******************************************
const fibo = [];
l = 10
n = 7
fibo[0] = 0;
fibo[1] = 1;
for (var i = 2; i < l; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo);
 if ( fibo.includes(n)){
    console.log(`Esse numero ${n} pertence a esse fibonacci`)
 } else{
    console.log(`Esse numero ${n} pertence a esse fibonacci`)
 }
