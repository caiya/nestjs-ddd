import { Post } from '#/domain/aggregate/post/post';
import { PostDto } from '#/interfaces/graphql/post/types/post';

export interface IPostService {

    findAll(options: any): Promise<PostDto[]>;

}
