import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

class AuthController {
  usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
    this.signin = this.signin.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signin(req: Request, res: Response) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }

    this.usuarios.push({ username, avatar });

    res.status(200).send("OK deu tudo certo");
  }

  getLoggedUser(username: string) {
    return this.usuarios.find((user) => user.username === username);
  }
}

export default new AuthController();
