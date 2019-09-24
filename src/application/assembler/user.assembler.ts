import { Injectable } from "@nestjs/common";
import { PostAuthor } from "#/domain/model/user/post-author";
import { User } from "../../interfaces/graphql/user/types/user";

@Injectable()
export class UserAssembler {

    assembleQueryPostAuthor(postUser: PostAuthor): User {
        if (!postUser) {
            return null
        }
        const user: User = new User()
        user.id = postUser.id
        return user
    }

}