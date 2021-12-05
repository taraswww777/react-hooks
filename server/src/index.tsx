import express from 'express';
import {msApi} from './api';

const app = express();

const DEFAULT_PORT = 3001;

const port = DEFAULT_PORT;

app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.use('/api', msApi);

app.listen(port, () => console.log(`Running on port ${port}`));
