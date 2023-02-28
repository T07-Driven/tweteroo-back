import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import authRouter from "./routes/auth.routes";
import tweetRouter from "./routes/tweet.routes";

const app = express();

app.use(cors());
app.use(json());
app.use(authRouter);
app.use(tweetRouter);

const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(chalk.bold.blue(`Server running in port: ${port}`))
);
