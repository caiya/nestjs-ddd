import { User } from "./user";

export interface UserRepository {
    
    find(id: number): Promise<User>;

}