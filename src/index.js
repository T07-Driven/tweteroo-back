import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import authRouter from './routes/auth.routes.js';
import tweetRouter from './routes/tweet.routes.js';

const app = express();

app.use(cors());
app.use(json());
app.use(authRouter)
app.use(tweetRouter)

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
