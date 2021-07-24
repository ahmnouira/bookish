import jsonServer from 'json-server'
import path from 'path'
import url from 'url'

import { parseQueryStringToJson } from './helpers/parseQueryString'

const server = jsonServer.create()
const router: any = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

/* Custom output example*/
// In this example, returned resources will be wrapped in a body property

router.render = (_req: any, res: any) => {
  const { data } = res.locals

  console.log('data', data)

  if (data && data.bookId) {
    data.bookId = parseInt(data.bookId)
  }
  res.jsonp(data)
}

server.use((req: any, _res, next) => {
  const query = url.parse(req.url).query
  req.query = parseQueryStringToJson(query)
  next()
})

server.use((req, res, next) => {
  if (req.method === 'DELETE' && req.query['_cleanup']) {
    const db = router.db
    db.set('books', []).write()
    res.sendStatus(204)
  } else {
    next()
  }
})

/*
const relations = {
  books: 'reviews',
}
*/

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(router)

server.listen(8080, () => {
  console.log('JSON Server is running: http://localhost:8080')
})
