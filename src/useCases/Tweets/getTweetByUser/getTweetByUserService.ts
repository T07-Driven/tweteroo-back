import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/tweetRepository";

export class GetTweetByUserService {
  constructor(private tweetRepository: TweetRepository) {}

  execute(username: string): Tweet[] {
    return this.tweetRepository.getByUser(username);
  }
}
