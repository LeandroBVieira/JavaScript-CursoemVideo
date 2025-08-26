function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Erro! Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = " "
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'hadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
             if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mjoven.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'madulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mvelha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center' 
        res.appendChild(img)
        img.style.textAlign= 'center'
        img.style.width = '300px'
    }
}