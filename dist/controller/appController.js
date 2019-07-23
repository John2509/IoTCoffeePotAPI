"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const AppController = {
    makeCoffee: (req) => {
        const database = data_1.Database.getInstance();
        const ip = database.getData(req.coffeeMaker_ID);
        console.log("Make Coffee: ", req, ip);
        return ip;
    },
    checkWaterLevel: (req) => {
        const database = data_1.Database.getInstance();
        const ip = database.getData(req.coffeeMaker_ID);
        console.log("Check Water Level: ", req, ip);
        return ip;
    }
};
exports.AppController = AppController;
//# sourceMappingURL=appController.js.map