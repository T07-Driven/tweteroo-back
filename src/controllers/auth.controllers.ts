import { Request, Response } from "express";
import { User } from "../models/User";

class AuthController {
  private users: User[];

  constructor() {
    this.users = [];
    this.signin = this.signin.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signin(req: Request, res: Response): Response {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      return res.status(400).send("All fields are mandatory!");
    }

    this.users.push({ username, avatar });

    return res.sendStatus(201);
  }

  getLoggedUser(username: string): User {
    const user = this.users.find((user) => user.username === username);

    /* if(!user){
      throw new Error('User não existe!')
    } */

    return user!; // CONFIA essa variável NUNCA será undefined ou null (má prática, mas existe)
  }
}

export default new AuthController();
