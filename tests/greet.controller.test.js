import greet from '../src/handler/greet.controller.js'
import Greeter from '../src/service/greet.service.js'
import GreetRepository from '../src/repositories/greet.repository.js'
import { TEXT } from '../src/helpers/ContentType.js'
import { NOT_IMPLEMENTED, OK } from '../src/helpers/http/HttpStatusCode.js'
import mockHttpRequest from './mocks/httpRequest.mock.js'
import HttpError from '../src/helpers/http/HttpError.js'
import mockDatabase from './mocks/db.mock.js'

const mockGreetRepository = new GreetRepository(mockDatabase)
const greetController = greet(new Greeter(mockGreetRepository))

describe('👋📩 Greet Endpoint Http Response', () => {
    let httpResponse = greetController(mockHttpRequest[0])
    test(`🟢 Http response must have a ${OK} status code`, () => {
        expect(httpResponse.statusCode).toBe(OK)
    })
    test(`📄 Content type must be '${TEXT}'`, () => {
        expect(httpResponse.contentType).toBe(TEXT)
    })
    test('🦺 Body must be a string', () => {
        expect(typeof httpResponse.body).toBe('string')
    })
    test('🕴 Body must contain the correct name', () => {
        expect(httpResponse.body).toContain('John')
    })
    test('☢ Request must reject if language is not supported', () => {
        expect(() => greetController(mockHttpRequest[1])).toThrow(HttpError)
    })
    test(`☢ Response must have a ${NOT_IMPLEMENTED} status code`, () => {
        let err
        try {
            greetController(mockHttpRequest[1])
        } catch (e) {
            err = e
        }
        expect(err.statusCode).toBe(NOT_IMPLEMENTED)
    })
})
