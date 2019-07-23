import { Database } from "../data";

interface ICoffeeMakerRequest {
	coffeeMaker_ID: number;
	coffeeMaker_IP: string;
}

const CoffeeMakerController = {
	RegisterCoffeeMaker: (req: ICoffeeMakerRequest) => {
		console.log("New Coffee Maker IP: ", req);
		const database: Database = Database.getInstance<string>();
		database.setData(req.coffeeMaker_ID, req.coffeeMaker_IP);
	}
};

export { CoffeeMakerController, ICoffeeMakerRequest };
