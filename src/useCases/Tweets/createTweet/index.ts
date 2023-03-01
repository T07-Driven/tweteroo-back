import { TweetRepository } from "../../../repositories/tweetRepository";
import { CreateTweetController } from "./createTweetController";
import { CreateTweetService } from "./createTweetService";

const tweetRepository = TweetRepository.getInstance();
const createTweetService = new CreateTweetService(tweetRepository);
export const createTweetController = new CreateTweetController(
  createTweetService
);
