import validateGreeting from '../src/model/greet.js'

describe('🚧 Greeting object validation', () => {
    test('🎉 English salute must not have errors', () => {
        const greeting = { language: 'en', salute: 'Hello' }
        const errors = validateGreeting(greeting)
        expect(errors).toHaveLength(0)
    })
    test('🚩 Spanish salute must have errors', () => {
        const greeting = { language: 'español', salute: { saludo: 'Hola' } }
        const errors = validateGreeting(greeting)
        expect(errors).not.toHaveLength(0)
    })
})
