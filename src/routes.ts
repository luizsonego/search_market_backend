import { Router } from 'express'
import DevelopersController from './controllers/DevelopersController'
import MarketController from './controllers/MarketController'

const routes = Router()

routes.get('/developers', DevelopersController.index)
routes.get('/developers/:id', DevelopersController.show)
routes.put('/developers/:id', DevelopersController.update)
routes.post('/developers', DevelopersController.create)

routes.post('/market', MarketController.create)
routes.get('/market', MarketController.index)
routes.get('/market/:id', MarketController.show)

export default routes
