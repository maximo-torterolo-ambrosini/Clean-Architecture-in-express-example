import HttpRequest from './http/HttpRequest.js'
import { INTERNAL_SERVER_ERROR } from './http/HttpStatusCode.js'

const callbackHandler = (controller) => async (req, res) => {
    const httpRequest = Object.freeze(new HttpRequest(req))
    console.log(httpRequest)
    try {
        const httpResponse = await controller(httpRequest)
        res.set(httpResponse.headers)
        res.type(httpResponse.contentType)
        res.status(httpResponse.statusCode).send(httpResponse.body)
    } catch (e) {
        res.status(e.statusCode).send(e.message)
    }
}
export default callbackHandler
export { callbackHandler }
