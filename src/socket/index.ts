import * as WebSocket from "ws";
import { CoffeeMakerController, ICoffeeMakerRequest } from "../controller";

const Socket = (wss: WebSocket.Server) => {
	wss.on("connection", (ws: WebSocket) => {
		console.log("new connection");

		ws.on("message", (message: string) => {
			console.log("message: " + message);
		});

		const login = (message: string) => {
			const id = Number(message);
			if (id) {
				const req: ICoffeeMakerRequest = {
					coffeeMaker_ID: id,
					coffeeMaker_Socket: coffeeSocketApiMaker(ws),
				};
				CoffeeMakerController.RegisterCoffeeMaker(req);
			} else {
				ws.once("message", login);
			}
		};

		ws.once("message", login);
	});
};

interface ICoffeeSocketApi {
	CheckWater: (callback?: (msg: string) => void) => void;
	CleanFilter: (callback?: (msg: string) => void) => void;
	MakeCoffee: (callback?: (msg: string) => void) => void;
}

const coffeeSocketApiMaker = (ws: WebSocket): ICoffeeSocketApi => {
	return {
		CheckWater:  (callback?: (msg: string) => void) => {
			ws.send("w");
			if (callback) { ws.once("message", clearMessage(callback)); }
		},
		CleanFilter: (callback?: (msg: string) => void) => {
			ws.send("f");
			if (callback) { ws.once("message", clearMessage(callback)); }
		},
		MakeCoffee:  (callback?: (msg: string) => void) => {
			ws.send("c");
			if (callback) { ws.once("message", clearMessage(callback)); }
		},
	};
};

const clearMessage = (callback: (msg: string) => void) => (msg: string) => {
	callback(msg.substring(1, msg.length - 1));
};

export { Socket as socket, ICoffeeSocketApi };
