import chalk from 'chalk';

export const loggerMiddleware = (req, res, next) => {
	const methodColors = {
		GET: chalk.green,
		POST: chalk.blue,
		PUT: chalk.yellow,
		DELETE: chalk.red,
		PATCH: chalk.magenta
	};

	console.log(methodColors[req.method](req.method), req.url);
	next();
}
