function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selftab')
    if (num.value.length == 0) {
        window.alert('Por favor,Digite um Número') //aviso se não for digitado um número
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //limpa a tabuada
        while (c <= 10) {
            let item = document.createElement('option') //cria um elemento em HTML
            item.text = `${n} x ${c} = ${n * c}` //Multiplicação
            item.value = `tab${c}` //Define o valor do item
            tab.appendChild(item) // adiciona o item ao elemento tab
            c++ //Aumenta o Contador
        }
    }
}