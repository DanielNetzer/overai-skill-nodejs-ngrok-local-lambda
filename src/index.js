const https = require('https');

/**
 * builds the bot response
 * @param {string} introSpeakOut 
 */
const constructBotResponse = (introSpeakOut) => {
    return {
        Result: {
            "IntroSpeakOut": introSpeakOut
        }
    };
};

/**
 * Get the a Chuck Norris quote using api.chucknorris.io 3rd party API
 */
const getNorrised = () => {

    let chuckNorrisIt = {
        host: 'api.chucknorris.io',
        path: `/jokes/random`,
        method: 'GET',
    };

    return new Promise((resolve, reject) => {
        const req = https.request(chuckNorrisIt, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk.toString());
            res.on('end', () => {
                // If we know it's JSON, parse it
                if (res.headers['content-type'].includes('application/json')) {
                    body = JSON.parse(body);
                }

                resolve(body);
            });
        });

        req.on('error', (e) => reject(e.message));
        req.write('');
        req.end();
    })
};

// function built the same way as an AWS Lambda function
module.exports.handler = async function (event, context, callback) {
    const defaultResponse = constructBotResponse('One Million years ago Chuck Norris slapped the world, and to this day it is still spinning');

    try {
        let norrisQuote = await getNorrised();
        const response = constructBotResponse(norrisQuote.value.replace(/[^\w\s]/gi, ''));
        callback(null, response);
    } catch (error) {
        callback(null, defaultResponse);
    }
};