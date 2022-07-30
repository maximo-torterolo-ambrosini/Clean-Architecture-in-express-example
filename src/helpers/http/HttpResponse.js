import ContentType from '../ContentType.js'
import HttpStatusCode from './HttpStatusCode.js'

const schema = {
    statusCode: (value) => Object.values(HttpStatusCode).indexOf(parseInt(value)) !== -1,
    contentType: (value) => Object.values(ContentType).indexOf(value) !== -1,
    body: (value) => value !== undefined
}

const validateHttpResponse = (httpResponse) => {
    const errors = []
    for (const key in schema) {
        if (!schema[key](httpResponse[key])) {
            if (typeof httpResponse[key] === 'object')
                errors.push(
                    `${key} is not valid, check values "${JSON.stringify(httpResponse[key])}"`
                )
            else errors.push(`${key} is invalid "${httpResponse[key]}"`)
        }
    }
    if (errors.length > 0) throw new Error(errors.join(', '))
}

export default class HttpResponse {
    constructor(statusCode, body, contentType, headers) {
        this.statusCode = statusCode
        this.body = body
        this.contentType = contentType
        this.headers = headers

        // if something is undefined, throw exception
        validateHttpResponse(this)
    }
}
export { HttpResponse }
