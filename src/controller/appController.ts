import { Database } from "../data";
import { CoffeeMaker } from "../model";

interface IAppRequest {
	coffeeMaker_ID: number;
}

const AppController = {
	makeCoffee: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<CoffeeMaker> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		if (coffeMaker) { coffeMaker.makeCoffee(callback); } else { callback("Cafeteira não existe"); }
	},

	checkWaterLevel: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<CoffeeMaker> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		if (coffeMaker) { coffeMaker.checkWater(callback); } else { callback("Cafeteira não existe"); }
	},

	cleanFilter: (req: IAppRequest, callback?: (msg: string) => void): void => {
		const database: Database<CoffeeMaker> = Database.getInstance();
		const coffeMaker = database.getData(req.coffeeMaker_ID);
		if (coffeMaker) { coffeMaker.cleanFilter(callback); } else { callback("Cafeteira não existe"); }
	}
};

export { AppController, IAppRequest };
