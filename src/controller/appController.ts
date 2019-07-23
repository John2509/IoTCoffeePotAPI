import { Database } from "../data";

interface IAppRequest {
	coffeeMaker_ID: number;
}

const AppController = {
	makeCoffee: (req: IAppRequest): string => {
		const database: Database = Database.getInstance<string>();
		const ip = database.getData(req.coffeeMaker_ID);
		console.log("Make Coffee: ", req, ip);
		return ip;
	},

	checkWaterLevel: (req: IAppRequest): string => {
		const database: Database = Database.getInstance<string>();
		const ip = database.getData(req.coffeeMaker_ID);
		console.log("Check Water Level: ", req, ip);
		return ip;
	}
};

export { AppController, IAppRequest };
