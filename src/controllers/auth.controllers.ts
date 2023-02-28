import { Request, Response } from "express";
import { User } from "../models/User";

class AuthController {
  users: User[];

  constructor() {
    this.users = [];
    this.signin = this.signin.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signin(req: Request, res: Response) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send("All fields are mandatory!");
      return;
    }

    this.users.push({ username, avatar });

    res.sendStatus(201);
  }

  getLoggedUser(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

export default new AuthController();
