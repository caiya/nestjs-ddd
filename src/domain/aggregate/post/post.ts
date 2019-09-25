import { PostStatus } from './post-status';
import { User } from '../user/user';

/**
 * 帖子实体
 */
export class Post {

    /**
     * 帖子id
     */
    id: number;
    /**
     * 作者id
     */
    authorId: number;
    /**
     * 标题
     */
    title: string;
    /**
     * 内容
     */
    content: string;
    /**
     * 发帖时间
     */
    postingTime: Date;
    /**
     * 状态
     */
    status: PostStatus;
    /**
     * 帖子作者
     */
    postAuthor: User;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    /**
     * 删除帖子
     */
    delete() {
        this.status = PostStatus.HAS_DELETED;
    }

}
