import Controller from '../Controllers/user'
import BaseRouter from './baseRouter'

export default class Routes extends BaseRouter {
  private controller: Controller
  constructor() {
    super(Controller)
    this.controller = new Controller()
  }
}
