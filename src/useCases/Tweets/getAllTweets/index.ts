import { TweetRepository } from "../../../repositories/tweetRepository";
import { GetAllTweetsController } from "./getAllTweetsController";
import { GetAllTweetsService } from "./getAllTweetsService";

const tweetRepository = TweetRepository.getInstance();
const getallTweetsService = new GetAllTweetsService(tweetRepository);
export const getallTweetsController = new GetAllTweetsController(
  getallTweetsService
);
