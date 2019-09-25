import { User } from "./user";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";

export interface UserRepository {
    
    find(id: number): Promise<UserQueryDto>;

}