export default class GreetRepository {
    constructor(db) {
        this.db = db
    }
    getSalute(language) {
        const greetings = this.db.getAll()
        const greet = greetings.find((greeting) => greeting.language === language)
        return greet.salute
    }
    addOne(greeting) {
        this.db.addOne(greeting)
    }
}
export { GreetRepository }
