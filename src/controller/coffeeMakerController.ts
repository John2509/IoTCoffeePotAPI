import { Database } from "../data";
import { ICoffeeSocketApi } from "../socket";

interface ICoffeeMakerRequest {
	coffeeMaker_ID: number;
	coffeeMaker_Socket: ICoffeeSocketApi;
}

const CoffeeMakerController = {
	RegisterCoffeeMaker: (req: ICoffeeMakerRequest) => {
		console.log("New Coffee Maker ID: ", req.coffeeMaker_ID);
		const database: Database = Database.getInstance();
		database.setData(req.coffeeMaker_ID, req.coffeeMaker_Socket);
	}
};

export { CoffeeMakerController, ICoffeeMakerRequest };
