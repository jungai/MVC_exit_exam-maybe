import { Application } from 'express'
import { User } from '../controller/user'

function allRoutes(r: Application) {
  /**
   * add route here
   */
  r.get('/', User)
}

export const mapRoutes = (s: Application ) => allRoutes(s)
