'use strict'
import request from 'request';

module.exports = app => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Endpoint");
    next();
    })

    app.get('/', (req, res, next) => {
        if (req.method === 'OPTIONS') {
            res.send('');
        } else {
            let endpoint = req.header('Endpoint');            
            if (!endpoint) {
                res.send(500, { error: 'There is no Endpoint header in the request' });
                return;
            }
            request(endpoint, (error, response, body) => {
                if (error) { console.error('error: ' + error) }
                res.send(body);
            });
        }
    })
}
