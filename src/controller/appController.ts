import { Database } from "../data";
import { ICoffeeSocketApi } from "../socket";

interface IAppRequest {
	coffeeMaker_ID: number;
}

const AppController = {
	makeCoffee: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<ICoffeeSocketApi> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		console.log("Make Coffee: ", req);
		coffeMaker.MakeCoffee(callback);
	},

	checkWaterLevel: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<ICoffeeSocketApi> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		console.log("Check Water Level: ", req);
		coffeMaker.CheckWater(callback);
	},

	cleanFilter: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<ICoffeeSocketApi> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		console.log("Clear Filter: ", req);
		coffeMaker.CleanFilter(callback);
	}
};

export { AppController, IAppRequest };
