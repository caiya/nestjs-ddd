import { Post } from "#/domain/aggregate/post/post";
import { PostDto } from "#/interfaces/graphql/user/types/post";

export interface IPostService {

    findAll(options: any): Promise<PostDto[]>;

}