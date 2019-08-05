import { AppController, IAppRequest } from "../controller";

const Routes = (app: any) => {

	app.get("/waterLevel", (req: { query: IAppRequest }, res: any) => {
		console.log("Check Water Level: ", req.query);
		if (req && req.query && req.query.coffeeMaker_ID) {
			AppController.checkWaterLevel(req.query, (msg: string) => res.json({msg}));
		} else {
			res.sendStatus(400);
		}
	});

	app.get("/coffee", (req: { query: IAppRequest }, res: any) => {
		console.log("Make Coffee: ", req.query);
		if (req && req.query && req.query.coffeeMaker_ID) {
			AppController.makeCoffee(req.query, (msg: string) => res.json({msg}));
		} else {
			res.sendStatus(400);
		}
	});

	app.get("/filter", (req: { query: IAppRequest }, res: any) => {
		console.log("Clean Filter: ", req.query);
		if (req && req.query && req.query.coffeeMaker_ID) {
			AppController.cleanFilter(req.query, (msg: string) => res.json({msg}));
		} else {
			res.sendStatus(400);
		}
	});
};

export { Routes as routes };
