import * as Express from 'express'
import * as swaggerUi from 'swagger-ui-express'
import * as cors from 'cors'

import openApiDocumentation from './openApiDocumentation'
import UserRoutes from './Routes/users'
import StateRoutes from './Routes/state'
import corsOptions from './corsConfig'

export class App {
  public app: Express.Application
  public userRoutes: Express.Router
  public stateRoutes: Express.Router

  constructor() {
    this.app = Express()
    this.userRoutes = new UserRoutes().router
    this.stateRoutes = new StateRoutes().router
    this.loadMiddleware()
    this.loadRoutes()
    this.loadDocumentationAPI()
  }

  private loadMiddleware() {
    // JSON
    this.app.use(Express.json())
    // CORS
    this.app.use(cors(corsOptions))
  }

  private loadRoutes() {
    this.app.use('/users', this.userRoutes)
    this.app.use('/states', this.stateRoutes)
  }

  private loadDocumentationAPI() {
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(openApiDocumentation)
    )
  }
}
