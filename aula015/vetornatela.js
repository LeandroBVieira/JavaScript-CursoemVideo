let num = [5, 2, 9, 3, 8, 1]
//num.sort()
/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(5)) //retorna o elemento ou -1 se não existir