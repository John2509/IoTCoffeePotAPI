import { AppController, CoffeeMakerController, IAppRequest, ICoffeeMakerRequest } from "../controller";

const Routes = (app: any) => {
	app.get("/waterLevel", (req: { query: IAppRequest }, res: any) => {
		if (req && req.query) {
			const ip = AppController.checkWaterLevel(req.query);
			res.status(200).json({ip});
		} else {
			res.sendStatus(400);
		}
	});

	app.get("/coffee", (req: { query: IAppRequest }, res: any) => {
		if (req && req.query) {
			const ip = AppController.makeCoffee(req.query);
			res.status(200).json({ip});
		} else {
			res.sendStatus(400);
		}
	});

	app.post("/coffeeMaker", (req: { body: ICoffeeMakerRequest }, res: any) => {
		if (req && req.body) {
			CoffeeMakerController.RegisterCoffeeMaker(req.body);
			res.sendStatus(200);
		} else {
			res.sendStatus(400);
		}
	});
};

export { Routes as routes };
