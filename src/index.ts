import express from "express";
import routes from "./routes/index";
import path from "path";
import { loggerMiddleware } from "./middlewares/logger";
import { errorHandler } from "./middlewares/error";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(loggerMiddleware);

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
