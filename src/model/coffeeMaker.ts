import { ICoffeeSocketApi } from "../socket";

class CoffeeMaker {
	constructor(private api: ICoffeeSocketApi) {}

	public makeCoffee(callback?: (msg: string) => void) {
		this.api.CheckWater(this.isThereEnoughWater(this.reallyMakeCoffee(this.createFilterMenssage(callback))));
	}

	public checkWater(callback?: (msg: string) => void) {
		this.api.CheckWater(this.isThereEnoughWater(this.createWaterMenssage(callback)));
	}

	public cleanFilter(callback?: (msg: string) => void) {
		this.api.CleanFilter(this.createFilterMenssage(callback));
	}

	private isThereEnoughWater(callback?: (msg: boolean) => void) {
		return (msg: string) => {
			const level = Number(msg);
			if (level && level > 500) {
				callback(true);
			} else {
				callback(false);
			}
		};
	}

	private createWaterMenssage(callback?: (msg: string) => void) {
		return (msg: boolean) => {
			if (msg) {
				callback("Há água o suficiente.");
			} else {
				callback("Não há água o suficiente.");
			}
		};
	}

	private createFilterMenssage(callback?: (msg: string) => void) {
		return (msg: string) => {
			const usedTimes = Number(msg);
			if (usedTimes === 0) {
				callback("O filtro está limpo.");
			} else if (usedTimes) {
				callback(`O filtro foi usado ${usedTimes} vezes.`);
			} else if (msg === "FALSE") {
				callback("O filtro não está limpo.");
			} else {
				callback(msg);
			}
		};
	}

	private reallyMakeCoffee(callback?: (msg: string) => void) {
		return(msg: boolean) => {
			if (msg) {
				this.api.MakeCoffee(callback);
			} else {
				callback("Não há água o suficiente.");
			}
		};
	}
}

export {CoffeeMaker};
