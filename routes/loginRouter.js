const express = require('express');
const loginRouter = express.Router();

loginRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send the login form to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /login');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /login');
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /login');
    });

module.exports = loginRouter;