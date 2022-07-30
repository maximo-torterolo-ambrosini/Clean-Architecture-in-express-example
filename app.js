import Express from 'express'

// routes imports
import { r as greetRouter } from './src/routes/greet.router.js'

const app = Express()

app.set('json spaces', 4)
app.set('port', process.env.PORT || 8080)

app.use('/greet', greetRouter)

app.use((_req, res) => {
    res.status(404).send('Not found')
})
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
})
