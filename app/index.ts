import { Request, Response } from 'express'
import * as jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('../db/db.json')

const middlewaresOptions: jsonServer.MiddlewaresOptions = {
    bodyParser: true,
    logger: false,
    noCors: true,
    readOnly: true,
    static: 'assets',
}

const port = process.env.PORT || 3000

const middlewares = jsonServer.defaults(middlewaresOptions)

server.use(jsonServer.bodyParser)

server.use(middlewares)

server.get('/', (_req: Request, res: Response) => {
  res.send('hello')
})

server.use(router);

server.listen(3000, () => {
    console.log(`JSON Server is running on port ${port}`);
});
