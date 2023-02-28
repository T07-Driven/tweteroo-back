import { User } from "../../../models/User";
import { UserRepository } from "../../../repositories/userRepository";

export class GetLoggedUserService {
  constructor(private userRepository: UserRepository) {}

  execute(username: string): User {
    return this.userRepository.getLoggedUser(username);
  }
}
