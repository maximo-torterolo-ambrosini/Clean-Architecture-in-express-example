import { NOT_IMPLEMENTED } from '../helpers/http/HttpStatusCode.js'
import HttpError from '../helpers/http/HttpError.js'
export default class Greeter {
    constructor(greetRepository) {
        this.greetRepository = greetRepository
    }
    createSalute(language, name) {
        if (name === undefined) name = 'Anon'
        try {
            const salute = this.greetRepository.getSalute(language)
            return `${salute}, ${name}!`
        } catch (e) {
            throw new HttpError('Language not supported', NOT_IMPLEMENTED)
        }
    }
}
export { Greeter }
