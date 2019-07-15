interface ICoffeeMakerRequest {
	coffeeMaker_ID: number;
	coffeeMaker_IP: string;
}

const	CoffeeMakerController = {
	RegisterCoffeeMaker: (req: ICoffeeMakerRequest) => {
		console.log("New Coffee Maker IP: ", req);
	}
};

export {CoffeeMakerController, ICoffeeMakerRequest};
