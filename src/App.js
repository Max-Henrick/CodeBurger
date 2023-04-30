import express from 'express'
import Routes from './Routes'
import { resolve } from 'path'

class App {
  constructor() {
    this.app = express()

    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(express.json())
    this.app.use('/products', express.static(resolve(__dirname, '..', 'uploads')))
  }

  routes() {
    this.app.use(Routes)
  }
}

export default new App().app
