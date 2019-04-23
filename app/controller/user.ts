import { NextFunction, Request, Response } from 'express'
import { getUser } from '../model/user'

export const User = (_req: Request, res: Response, _next: NextFunction) => {
  const users = getUser()
  res.status(200).json({ msg: 'hello', result: users })
}
