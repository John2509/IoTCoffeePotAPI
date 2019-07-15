import bodyParser from "body-parser";
import express from "express";
import { routes } from "./api/index";

const port = 8080; // default port to listen

const app = express();
app.use(bodyParser.json());

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});

routes(app);
