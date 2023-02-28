import { UserRepository } from "../../../repositories/userRepository";
import { GetLoggedUserService } from "./getLoggedUserService";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUserService(userRepository);
