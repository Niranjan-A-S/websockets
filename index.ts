import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = createServer(app);
const port = 3000;

const wss = new WebSocketServer({ server });

wss.on('connection', async (ws) => {
    console.log('someone connected');
    ws.on('message', (message) => {
        console.log('Received message:', message);
        ws.send(`Hello you sent ${message}`);
    });
});


app.get('/', (req, res) => {
    res.send('Hello World!');
})

server.listen(port, () => {
    console.log('Server listening on port', port);
});