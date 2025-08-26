function contar() {
    let ini = window.document.getElementById('txti') //converte o Html para JS
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        window.alert('ERRO! Faltam Dados! Seu Imbecíl,Preencha todos os dados requiridos!')
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value) //Converte o valor de string em Numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}` //emoji
                //Ordem Crescente
            }
        } else  {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
                //Ordem Decrescente
            }
        }
        res.innerHTML += `\u{1F3C1}` //emoji Final
    }

}