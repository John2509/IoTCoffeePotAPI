interface IAppRequest {
	coffeeMaker_ID: number;
}

const	AppController = {
	makeCoffee: (req: IAppRequest) => {
		console.log("Make Coffee: ", req);
	},

	checkWaterLevel: (req: IAppRequest) => {
		console.log("Check Water Level: ", req);
	}
};

export {AppController, IAppRequest};
