import { Request, Response } from "express";
import { GetAllTweetsService } from "./getAllTweetsService";

export class GetAllTweetsController {
  constructor(private getAllTweetsService: GetAllTweetsService) {}

  handle(req: Request, res: Response): Response {
    const page = Number(req.query.page!);

    if (page && page < 1) {
      return res.status(400).send("Please enter a valid page!");
    }

    this.getAllTweetsService.execute(page);

    return res.sendStatus(201);
  }
}
