import express from "express";
import routes from "./routes/index.js";
import { loggerMiddleware } from "./middlewares/logger.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(loggerMiddleware);

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})

