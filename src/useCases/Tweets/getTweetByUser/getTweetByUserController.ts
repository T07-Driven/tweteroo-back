import { Request, Response } from "express";
import { GetTweetByUserService } from "./getTweetByUserService";

export class GetTweetByUserController {
  constructor(private getTweetByUserService: GetTweetByUserService) {}

  handle(req: Request, res: Response): Response {
    const { username } = req.params;

    const tweetsByUser = this.getTweetByUserService.execute(username);

    return res.status(200).send(tweetsByUser);
  }
}
