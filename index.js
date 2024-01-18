function verificar () {
    //Ano atual
    let data = new Date()
    let anoAtual = data.getFullYear()

    let fano = document.getElementById('iano')
    let res = document.getElementById('ires')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('sex')
        let idade = anoAtual - Number(fano.value) //calculo idade
        let genero = ``
        let divImagem = document.getElementById('imagem')
        //imagem
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 4){
                //crianca
                img.setAttribute('src', 'imagens/babyBoy.jpg')

            } else if (idade < 10) {
                //prejovem
                img.setAttribute('src', 'imagens/kidBoy.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teenBoy.jpg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultBoy.jpg')
            } else {
                img.setAttribute('src', 'imagens/oldBoy.jpg')
                //idoso
            }
        } else if (sex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 4){
                //crianca
                img.setAttribute('src', 'imagens/babyGirl.jpg')

            } else if (idade < 10) {
                //prejovem
                img.setAttribute('src', 'imagens/kidGirl.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/teenGirl.jpg')

            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/adultGirl.jpg')
            } else {
                img.setAttribute('src', 'imagens/oldGirl.jpg')
                //idosa
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        divImagem.innerHTML = ''
        divImagem.appendChild(img)
        
    }

}