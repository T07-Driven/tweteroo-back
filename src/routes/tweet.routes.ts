import { Router } from "express";
import tweetController from "../controllers/tweet.controller";
import { createTweetController } from "../useCases/Tweets/createTweet";
import { getallTweetsController } from "../useCases/Tweets/getAllTweets";
import { getTweetByUserController } from "../useCases/Tweets/getTweetByUser";

const tweetRouter = Router();

tweetRouter.post("/tweets", (req, res) =>
  createTweetController.handle(req, res)
);
tweetRouter.get("/tweets", (req, res) =>
  getallTweetsController.handle(req, res)
);
tweetRouter.get("/tweets/:username", (req, res) =>
  getTweetByUserController.handle(req, res)
);

export default tweetRouter;
