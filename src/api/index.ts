import { AppController, IAppRequest } from "../controller";

const Routes = (app: any) => {

	app.get("/waterLevel", (req: { query: IAppRequest }, res: any) => {
		if (req && req.query) {
			AppController.checkWaterLevel(req.query, (msg: string) => res.json({msg}));
		} else {
			res.sendStatus(400);
		}
	});

	app.get("/coffee", (req: { query: IAppRequest }, res: any) => {
		if (req && req.query) {
			AppController.makeCoffee(req.query, (msg: string) => res.json({msg}));
		} else {
			res.sendStatus(400);
		}
	});
};

export { Routes as routes };
