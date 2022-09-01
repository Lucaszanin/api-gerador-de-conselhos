import {url} from '../variables.js'

async function getAdevices(){
    const response = await fetch(`${url}`)
    const responseJson = await response.json()
    return await responseJson
}   

export {getAdevices}
