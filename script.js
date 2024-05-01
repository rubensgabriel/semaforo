const imagens = ['Vermelho', 'Amarelo', 'Verde']
const luz = document.getElementById('luz')
const automatico = document.getElementById('automatico')
const btns = document.getElementsByTagName('button');
let sinalAutomatico

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
        // Limpa o intervalo sempre que o usuário clicar novamente em um botão
        clearInterval(sinalAutomatico)
        if(btns[i].textContent == imagens[i]) {
            luz.src = `${imagens[i]}.png`
        }
        // Chama a função corAutomatica inserindo um intervalo de tempo para que a função possa ser executada em looping
        else if (btns[i].textContent == "Automático"){
            sinalAutomatico = setInterval(corAutomatica, 1000)
        }
    })
}

let contador = 0
// Altera as cores do semáforo de forma automática
function corAutomatica() {
    if(contador > 2) {
        contador = 0
    }
    luz.src = `${imagens[contador]}.png`
    contador++
}

