function parimpar(n) {
    if (n % 2 == 0) {
        return 'par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(22)
console.log(res)
console.log(parimpar(11))