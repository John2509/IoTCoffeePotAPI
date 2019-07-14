"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Routes = (app) => {
    app.get("/", (req, res) => {
        console.log(req);
        res.send("Hello world!");
    });
    app.get("/waterLevel", (req, res) => {
        if (req && req.query && req.query.coffeeMaker_ID) {
            console.log(req.query.coffeeMaker_ID);
        }
        res.send("42");
    });
};
exports.routes = Routes;
//# sourceMappingURL=index.js.map