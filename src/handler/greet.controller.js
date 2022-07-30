import HttpResponse from '../helpers/http/HttpResponse.js'
import { OK } from '../helpers/http/HttpStatusCode.js'
import { TEXT } from '../helpers/ContentType.js'
import parsePath from '../helpers/pathParser.js'

const extraHeaders = {
    'Saluted-By': 'Greeting Service',
    'Saluted-At': new Date().toISOString()
}

const greet = (service) => (httpRequest) => {
    const { name } = httpRequest.query
    const { country: language } = httpRequest.params

    const salute = service.createSalute(parsePath(language), name)
    return new HttpResponse(OK, salute, TEXT, { 'Content-Type': TEXT, ...extraHeaders })
}

export default greet
export { greet }
