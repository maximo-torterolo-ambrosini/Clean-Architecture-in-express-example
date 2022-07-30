import fs from 'fs'
import validateGreeting from '../model/greet.js'

const getAll = () => {
    const data = JSON.parse(fs.readFileSync('./src/db/greeting.json', 'utf8'))
    return data
}

const addOne = (greeting) => {
    const data = getAll()
    const err = validateGreeting(greeting)
    if (err.length > 0) throw new Error(err)
    else {
        data.push({ salute: greeting.salute, language: greeting.language.toLowerCase() })
        fs.writeFileSync('./src/db/greeting.json', JSON.stringify(data, null, 4), 'utf8')
        return greeting
    }
}

const addAll = (greetings) => {
    const data = getAll()
    const err = []
    greetings.forEach((greeting) => {
        err = validateGreeting(greeting)

        if (err.length > 0) throw new Error(err)
        else data.push({ salute: greeting.salute, language: greeting.language.toLowerCase() })
    })
    fs.writeFileSync('./src/db/greeting.json', JSON.stringify(data, null, 4), 'utf8')
    return data
}

const writeAll = (greetings) => {
    greetings.forEach((greeting) => {
        err = validateGreeting(greeting)
        if (err.length > 0) throw new Error(err)
        else
            fs.writeFileSync(
                './src/db/greeting.json',
                JSON.stringify(
                    { salute: greeting.salute, language: greeting.language.toLowerCase() },
                    null,
                    4
                ),
                'utf8'
            )
    })
    return greetings
}

const db = {
    getAll,
    addOne,
    addAll,
    writeAll
}
export default db
export { getAll, addOne, addAll, writeAll }
