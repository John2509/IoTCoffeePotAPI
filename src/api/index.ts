interface IAppRequest {
	coffeeMaker_ID: number;
}

interface ICoffeeMakerRequest extends IAppRequest {
	coffeMaker_IP: string;
}

const Routes = (app: any) => {

	app.get("/", (req: any, res: any) => {
		console.log(req);
		res.send("Hello world!");
	});

	app.get("/waterLevel", (req: { query: IAppRequest }, res: any) => {
		if (req && req.query && req.query.coffeeMaker_ID) {
			console.log(req.query.coffeeMaker_ID);
		}
		res.send("42");
	});
};

export { Routes as routes };
