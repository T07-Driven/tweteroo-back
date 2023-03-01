import { TweetRepository } from "../../../repositories/tweetRepository";
import { GetAllTweetsController } from "./getAllTweetsController";
import { GetAllTweetsService } from "./getAllTweetsService";

const tweetRepository = TweetRepository.getInstance();
const getAllTweetsService = new GetAllTweetsService(tweetRepository);
export const getAllTweetsController = new GetAllTweetsController(
  getAllTweetsService
);
