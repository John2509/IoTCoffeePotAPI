"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const CoffeeMakerController = {
    RegisterCoffeeMaker: (req) => {
        console.log("New Coffee Maker IP: ", req);
        const database = data_1.Database.getInstance();
        database.setData(req.coffeeMaker_ID, req.coffeeMaker_IP);
    }
};
exports.CoffeeMakerController = CoffeeMakerController;
//# sourceMappingURL=coffeeMakerController.js.map