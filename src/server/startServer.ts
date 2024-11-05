import chalk from "chalk";
import type { Express } from "express";

const startServer = (app: Express, port: number): void => {
  app.listen(port, () => {
    console.log(chalk.green(`Server listening on http://localhost:${port}`));
  });
};

export default startServer;
