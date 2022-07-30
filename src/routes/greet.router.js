import { Router } from 'express'
import callBackHandler from '../helpers/callbackHandler.js'
import { greet as greetController } from '../handler/greet.controller.js'
import { Greeter as GreetService } from '../service/greet.service.js'
import db from '../db/client.js'
import GreetRepository from '../repositories/greet.repository.js'
const r = Router()

const greetRepository = new GreetRepository(db)
const greetService = new GreetService(greetRepository)
const greetHandler = greetController(greetService)

r.get('/:country', callBackHandler(greetHandler))

export default r
export { r }
