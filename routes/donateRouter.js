const express = require('express');
const donateRouter = express.Router();

donateRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send the donation form to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /donate');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /donate');
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /donate');
    });

module.exports = donateRouter;