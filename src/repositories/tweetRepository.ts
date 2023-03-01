import { Tweet } from "../models/Tweet";

export class TweetRepository {
  private tweets: Tweet[];
  private static INSTANCE: TweetRepository;

  constructor() {
    this.tweets = [];
  }

  public static getInstance(): TweetRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new TweetRepository();
    }

    return this.INSTANCE;
  }

  create({ username, tweet, avatar }: Tweet): void {
    const newTweet: Tweet = new Tweet(username, tweet, avatar);
    this.tweets.push(newTweet);
  }

  getAll(start: number, end: number): Tweet[] {
    if (this.tweets.length <= 10) {
      return this.reverseTweets();
    }
    return this.reverseTweets().slice(start, end);
  }

  getByUser(username: string): Tweet[] {
    const tweetsDoUsuario = this.tweets.filter((t) => t.username === username);
    return tweetsDoUsuario;
  }

  private reverseTweets(): Tweet[] {
    return [...this.tweets].reverse();
  }
}
