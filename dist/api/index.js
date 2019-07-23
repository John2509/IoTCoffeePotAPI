"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller");
const Routes = (app) => {
    app.get("/waterLevel", (req, res) => {
        if (req && req.query) {
            const ip = controller_1.AppController.checkWaterLevel(req.query);
            res.status(200).json({ ip });
        }
        else {
            res.sendStatus(400);
        }
    });
    app.get("/coffee", (req, res) => {
        if (req && req.query) {
            const ip = controller_1.AppController.makeCoffee(req.query);
            res.status(200).json({ ip });
        }
        else {
            res.sendStatus(400);
        }
    });
    app.post("/coffeeMaker", (req, res) => {
        if (req && req.body) {
            controller_1.CoffeeMakerController.RegisterCoffeeMaker(req.body);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(400);
        }
    });
};
exports.routes = Routes;
//# sourceMappingURL=index.js.map