import { UserRepository } from "../../../repositories/userRepository";
import CreateUserController from "./createUserController";
import { CreateUserService } from "./createUserService";

const userRepository = UserRepository.getInstance();
const createUserService = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserService);
