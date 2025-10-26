import http from "node:http"
import { json } from "./middlewares/json.js"
import { routes } from "./routes.js"
import { extractQueryParams } from "./extract-query-params.js"

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204); 
        return res.end();
    }

    
    const {method, url} = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if(route) {
        const routeParams = req.url.match(route.path)

        const { query, parms } = routeParams.groups
        
        req.params = parms
        req.query = query ? extractQueryParams(query) : {}

        return route.handler(req, res)
    }

    return res.writeHead(404).end('Erro 404: Página não encontrada.')
    
})

server.listen(3333)