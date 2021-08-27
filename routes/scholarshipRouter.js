const express = require('express');
const scholashipRouter = express.Router();

scholashipRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send the scholarship application to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /scholaship');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /scholaship');
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /scholaship');
    });

module.exports = scholashipRouter;