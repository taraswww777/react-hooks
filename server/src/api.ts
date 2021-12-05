const express = require('express');


const msApi = express.Router();

msApi.get('/products', (request, response) => {
    response.json({
        items: [
            {id: 1},
            {id: 2},
            {id: 3},
        ]
    });
});


export {
    msApi
}
