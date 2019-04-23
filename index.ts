import * as jsonServer from 'json-server'
import { mapRoutes } from './routes'

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')

const middlewaresOptions: jsonServer.MiddlewaresOptions = {
    bodyParser: true,
    logger: false,
    noCors: true,
    readOnly: true,
    static: 'assets',
}

const port: number = 3000

const middlewares = jsonServer.defaults(middlewaresOptions)

server.use(jsonServer.bodyParser)

server.use(middlewares)

// mapRoutes in routes
mapRoutes(server)


server.use(router);

server.listen(3000, () => {
    console.log(`JSON Server is running on port ${port}`);
});
