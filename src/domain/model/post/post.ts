import { PostStatus } from "./post-status";
import { PostAuthor } from "../user/post-author";

/**
 * 帖子实体
 */
export class Post {

    /**
     * 帖子id
     */
    private _id: number;
    /**
     * 作者id
     */
    private _authorId: number;
    /**
     * 标题
     */
    private _title: string;
    /**
     * 发帖时间
     */
    private _postingTime: Date;
    /**
     * 状态
     */
    private _status: PostStatus;
    /**
     * 帖子作者
     */
    private _postAuthor: PostAuthor;

    constructor() {
        this._postingTime = new Date()
    }

}