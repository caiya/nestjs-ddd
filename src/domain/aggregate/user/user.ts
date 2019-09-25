import { Post } from "../post/post"
import { BadRequestException } from "@nestjs/common"

/**
 * 用户实体
 */
export class User {

    constructor(private _id: number) {}

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    /**
     * 发帖
     * @param title 
     * @param content 
     */
    posting?(title: string, content: string) : Post{
        if (!content || content.length < 20) {
            throw new BadRequestException('帖子内容不能少于20字符')
        }
        let post = new Post(title, content)
        return post
    }

    /**
     * 删除帖子
     * @param post 
     */
    deletePost?(post: Post): Post {
        if (!post) {
            throw new BadRequestException('请求为空')
        }
        if (this.id !== post.authorId) {
            throw new BadRequestException('您非帖子本人无权删帖')
        }
        post.delete()
        return post
    }
}