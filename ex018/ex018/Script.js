let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //adiciona o numero
        let item = document.createElement('option') //cria um elemento
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //adiciona o elemento na lista
        res.innerHTML = '' //limpa 
    } else {
        window.alert('valor inválido,ou Número já encontrado')
    }
    num.value = ''
    num.focus() //foca no input
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor antes de Finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos] //soma os valores inseridos
            if (valores[pos] > maior) 
                maior = valores[pos]
             if (valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / tot //calcula a media 
        res.innerHTML = '' //limpa 
        res.innerHTML += `<p>ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML +=`<p>Valor maior informado foi ${maior}</p>`
        res.innerHTML += `<p>menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores é ${soma}.<p/>`
        res.innerHTML += `<p>media dos valores foi ${media}.</p>`
    }
}