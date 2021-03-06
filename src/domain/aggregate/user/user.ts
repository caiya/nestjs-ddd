import { Post } from '../post/post';
import { BadRequestException } from '@nestjs/common';

/**
 * 领域实体-user
 */
export class User {

    id: number;

    isActive: boolean;

    firstName: string;

    lastName: string;

    /**
     * 发帖
     * @param title
     * @param content
     */
    posting?(title: string, content: string): Post {
        if (!content || content.length < 20) {
            throw new BadRequestException('帖子内容不能少于20字符');
        }
        const post = new Post(title, content);
        return post;
    }

    /**
     * 删除帖子
     * @param post
     */
    deletePost?(post: Post): Post {
        if (!post) {
            throw new BadRequestException('请求为空');
        }
        if (this.id !== post.authorId) {
            throw new BadRequestException('您非帖子本人无权删帖');
        }
        post.delete();
        return post;
    }

}
