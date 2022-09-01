import { getAdevices } from "../scripts/services/services.js"

const btn = document.querySelector('.button')
let mensagem = ''
let idMensagem = ''

async function readMsg() {
    const resposta = await getAdevices()
    mensagem = resposta.slip.advice
    idMensagem = resposta.slip.id
}

function renderMsg() {
    readMsg()
    const idDevice = document.querySelector('#id-adevice')
    const advice = document.querySelector('#description')
    advice.innerHTML = mensagem
    idDevice.innerHTML = idMensagem
}

readMsg()
btn.addEventListener('click', renderMsg)


