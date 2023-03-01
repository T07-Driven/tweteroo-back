import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/tweetRepository";

export class GetAllTweetsService {
  constructor(private tweetRepository: TweetRepository) {}

  execute(page: number): Tweet[] {
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    return this.tweetRepository.getAll(start, end);
  }
}
