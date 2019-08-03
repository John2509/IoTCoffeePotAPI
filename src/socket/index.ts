import * as WebSocket from "ws";
import { CoffeeMakerController, ICoffeeMakerRequest } from "../controller";

const Socket = (wss: WebSocket.Server) => {
	wss.on("connection", (ws: WebSocket) => {

		ws.on("message", (message: string) => {
			const id = Number(message);
			if (id) {
				const req: ICoffeeMakerRequest = {
					coffeeMaker_ID: id,
					coffeeMaker_Socket: coffeeSocketApiMaker(ws),
				};
				CoffeeMakerController.RegisterCoffeeMaker(req);
			}
		});
	});
};

interface ICoffeeSocketApi {
	CheckWater: (callback?: (msg: string) => void) => void;
	MakeCoffee: (callback?: (msg: string) => void) => void;
}

const coffeeSocketApiMaker = (ws: WebSocket): ICoffeeSocketApi => {
	return {
		CheckWater: (callback?: (msg: string) => void) => {
			ws.send("/w");
			if (callback) { ws.once("message", callback); }
		},
		MakeCoffee: (callback?: (msg: string) => void) => {
			ws.send("/c");
			if (callback) { ws.once("message", callback); }
		},
	};
};

export { Socket as socket, ICoffeeSocketApi };
