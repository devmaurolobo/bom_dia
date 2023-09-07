function carregar() {
    
    var msg = document.getElementById('horario')
    var imagem = document.getElementById('img')
    var data = new Date()

    var horas = data.getHours()


    var minutos = data.getMinutes()


    msg.innerHTML = `Agora são exatamente ${horas} <br> horas e ${minutos} minutos.`
    if (horas >=0 && horas <12) {
        imagem.src = `./img/manha.jpg`
        document.body.style.background = "#D3D3D3"
        window.alert("Bom dia").delay(2000)
    } else if (horas >=12 && horas <18) {
        imagem.src = `./img/tarde.jpg`
        document.body.style.background = "#FFDEAD"
        window.alert("Boa tarde").delay(5000)
    } else {
        imagem.src = `./img/noite.jpg`
        document.body.style.background = "#808080"
        window.alert("Boa noite").delay(2000)
    }
}
    
