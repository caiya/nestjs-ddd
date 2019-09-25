import { User } from "./user";
import { UserDto } from "#/interfaces/graphql/user/types/user";

export interface UserRepository {
    
    find(id: number): Promise<UserDto>;

}