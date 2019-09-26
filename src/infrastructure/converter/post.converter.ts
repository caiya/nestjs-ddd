import { Post } from '../../domain/aggregate/post/post';
import { PostEntity } from '../entity/post.entity';

export class PostConverter {

    static toEntity(user: Post): PostEntity {
        const userEntity = new PostEntity();
        userEntity.id = user.id;
        return userEntity;
    }

    static toDomain(postEntity: PostEntity): Post {
        let post = new Post(postEntity.title, postEntity.content);

        post = Object.assign({}, post, postEntity);
        return post;
    }

}
