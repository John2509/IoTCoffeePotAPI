import { Database } from "../data";
import { CoffeeMaker } from "../model";

interface ICoffeeMakerRequest {
	coffeeMaker_ID: number;
	coffeeMaker_Socket: CoffeeMaker;
}

const CoffeeMakerController = {
	RegisterCoffeeMaker: (req: ICoffeeMakerRequest) => {
		const database: Database = Database.getInstance();
		database.setData(req.coffeeMaker_ID, req.coffeeMaker_Socket);
	}
};

export { CoffeeMakerController, ICoffeeMakerRequest };
