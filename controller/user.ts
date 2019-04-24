import { NextFunction, Request, Response } from 'express'
import { getUser } from '../model/user'

export const User = (_req: Request, res: Response, _next: NextFunction) => {
  const users = getUser()
  res.render('index', { msg: 'test mvc', result: users})
}
