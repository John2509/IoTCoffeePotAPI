import bodyParser from "body-parser";
import express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { routes } from "./api/index";
import { socket } from "./socket";

const port = 8000; // default port to listen

const app = express();
const server = http.createServer(app);
const wss	= new WebSocket.Server({server});

app.use(bodyParser.json());

routes(app);
socket(wss);

server.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
