// Questão 4*******************************************************

s = 67.836,43
r = 36.678,66
m = 29.229,88
e = 27.165,48
o = 19.849,53

var total = s + r + m + e + o
var sp = ((s / total) * 100)
var rj = ((r / total) * 100)
var mg = ((m / total) * 100)
var es = ((e / total) * 100)
var o = ((o / total) * 100)


console.log(`O valor do percentual de representação do estado de SP é ${(Math.trunc(sp))}`+'%')
console.log(`O valor do percentual de representação do estado de RJ é ${(Math.trunc(rj))}`+'%')
console.log(`O valor do percentual de representação do estado de MG é ${(Math.trunc(mg))}`+'%')
console.log(`O valor do percentual de representação do estado de ES é ${(Math.trunc(es))}`+'%')
console.log(`O valor do percentual de representação de Outros estados é ${(Math.trunc(o))}`+'%')
