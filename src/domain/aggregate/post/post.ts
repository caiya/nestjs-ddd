import { PostStatus } from "./post-status";
import { User } from "../user/user";

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
     * 内容
     */
    private _content: string;
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
    private _postAuthor: User;

    constructor(_title: string, _content: string) {
        this.title = _title
        this.content = _content
    }

    
    /**
     * 删除帖子
     */
    delete() {
        this.status = PostStatus.HAS_DELETED
    }


    set id(id : number) {
        this._id = id
    }

    get id(): number {
        return this._id
    }

    set authorId(authorId: number) {
        this._authorId = authorId
    }

    get authorId(): number {
        return this._authorId
    }

    set title(title: string) {
        this._title = title
    }

    get title(): string {
        return this._title
    }

    set content(content: string) {
        this._content = content
    }

    get content(): string {
        return this._content
    }

    set postingTime(postingTime: Date) {
        this._postingTime = postingTime
    }

    get postingTime(): Date {
        return this._postingTime
    }

    set status(status: PostStatus) {
        this._status = status
    }

    get status(): PostStatus {
        return this._status
    }

    set postAuthor(postAuthor: User) {
        this._postAuthor = postAuthor
    }

    get postAuthor(): User {
        return this._postAuthor
    }

}