"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/index");
const port = 8080; // default port to listen
const app = express_1.default();
app.use(body_parser_1.default.json());
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
index_1.routes(app);
//# sourceMappingURL=index.js.map