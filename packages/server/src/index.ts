import express from "express";
import routes from "./routes/index";
import path from "path";
import { loggerMiddleware } from "./middlewares/logger";
import { errorHandler } from "./middlewares/error";
import cookieParser from "cookie-parser";
import http from 'http';
import { initializeSocketServer } from './controllers/socketEvent';

const app = express();
const server = http.createServer(app);

const PORT = 3001;

initializeSocketServer(server);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(loggerMiddleware);

app.use(routes);

app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export { app };
