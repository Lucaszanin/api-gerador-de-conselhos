const url = 'https://api.adviceslip.com/advice'

const btn = document.querySelector('.button')
const idDevice = document.querySelector('#id-adevice')
const advice = document.querySelector('#description')

async function getAdevices(){
    const response = await fetch(`${url}`)
    const responseJson = await response.json()
    return await responseJson
}   

async function readMsg(){
    let resposta = await getAdevices()
    const mensagem  = resposta.slip.advice
    const  idMensagem = resposta.slip.id
    advice.innerHTML = mensagem
    idDevice.innerHTML = idMensagem
}


btn.addEventListener('click',readMsg)


