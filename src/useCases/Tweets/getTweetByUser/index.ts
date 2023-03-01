import { TweetRepository } from "../../../repositories/tweetRepository";
import { GetTweetByUserController } from "./getTweetByUserController";
import { GetTweetByUserService } from "./getTweetByUserService";

const tweetRepository = TweetRepository.getInstance();
const getTweetByUserService = new GetTweetByUserService(tweetRepository);
export const getTweetByUserController = new GetTweetByUserController(
  getTweetByUserService
);
