import { Application } from 'express'
import { User } from '../controller/user'

function allRoutes(r: Application) {
  // add new route here
  r.get('/users', User)
}

export const mapRoutes = (s: Application ) => {

  return allRoutes(s)
}
