import { User } from "./user";

export interface UserRepository {
    
    find(id: number): Promise<User>;

    save(user: User): Promise<User>;
}