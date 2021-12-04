import express from 'express';

const app = express();

const DEFAULT_PORT = 3001;

const port = DEFAULT_PORT;

app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.get('/products', (request, response) => {
    response.json({
        items: [
            {id:1},
            {id:2},
            {id:3},
        ]
    });
});
app.listen(port, () => console.log(`Running on port ${port}`));
