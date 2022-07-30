// regex that verify if string is two characters long
const languageAbbreviations = /^[a-zA-Z]{2}$/

const greetSchema = {
    language: (value) => languageAbbreviations.test(value.toLowerCase()),
    salute: (value) => typeof value === 'string'
}

const validateGreeting = (greeting) => {
    const errors = []
    for (const key in greetSchema) {
        if (!greetSchema[key](greeting[key])) {
            errors.push(`${key} is invalid`)
        }
    }
    return errors
}

export default validateGreeting
export { greetSchema, validateGreeting }
