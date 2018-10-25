const express = require('express');
const bodyParser = require('body-parser');
const lambda = require('./index');

// Initialize express server
const server = express();
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Hello World');
})

// Create POST route
server.post('/', (req, res) => {
    // Create dummy context with fail and succeed functions
    const context = {
        fail: () => {
            // Simply fail with internal server error
            res.sendStatus(500);
        },
        succeed: data => {
            // console.log(data)
            res.send(data);
        }
    };

    lambda.handler(req, context, (err, cbRes) => {
        res.json(cbRes);
    })

});

// Start express server
server.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});